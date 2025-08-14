import { IResolvers } from '@graphql-tools/utils';
import { ProjectModel } from '../models/Project';
import { SkillModel } from '../models/Skill';
import { EducationModel } from '../models/Education';
import { ContactMessageModel } from '../models/ContactMessage';
import { AboutModel } from '../models/About';
import { UserModel } from '../models/User';
import { PubSub } from 'graphql-subscriptions';
import { generateToken } from '../middleware/auth';
import { AuthenticationError, ForbiddenError } from 'apollo-server-express';

const pubsub = new PubSub();
const NEW_CONTACT_MESSAGE = 'NEW_CONTACT_MESSAGE';

export const resolvers: IResolvers = {
  Query: {
    // User queries
    me: async (_, __, { req }) => {
      if (!req.user) {
        return null;
      }
      return await UserModel.findById(req.user.userId);
    },
    users: async (_, __, { req }) => {
      // Check if user is admin
      if (!req.user || req.user.role !== 'ADMIN') {
        throw new ForbiddenError('Not authorized to view all users');
      }
      return await UserModel.find();
    },
    user: async (_, { id }, { req }) => {
      // Check if user is admin or requesting their own data
      if (!req.user || (req.user.role !== 'ADMIN' && req.user.userId !== id)) {
        throw new ForbiddenError('Not authorized to view this user');
      }
      return await UserModel.findById(id);
    },
    // Project queries
    projects: async () => {
      return await ProjectModel.find().sort({ date: -1 });
    },
    project: async (_, { id }) => {
      return await ProjectModel.findById(id);
    },
    projectsByCategory: async (_, { category }) => {
      return await ProjectModel.find({ category }).sort({ date: -1 });
    },
    featuredProjects: async () => {
      return await ProjectModel.find({ featured: true }).sort({ date: -1 });
    },

    // Skill queries
    skills: async () => {
      return await SkillModel.find().sort({ category: 1, name: 1 });
    },
    skill: async (_, { id }) => {
      return await SkillModel.findById(id);
    },
    skillsByCategory: async (_, { category }) => {
      return await SkillModel.find({ category }).sort({ name: 1 });
    },

    // Education queries
    educations: async () => {
      return await EducationModel.find().sort({ startDate: -1 });
    },
    education: async (_, { id }) => {
      return await EducationModel.findById(id);
    },

    // Contact message queries
    contactMessages: async () => {
      return await ContactMessageModel.find().sort({ createdAt: -1 });
    },
    contactMessage: async (_, { id }) => {
      return await ContactMessageModel.findById(id);
    },
    unreadContactMessages: async () => {
      return await ContactMessageModel.find({ read: false }).sort({ createdAt: -1 });
    },

    // About queries
    about: async () => {
      const aboutData = await AboutModel.findOne();
      return aboutData || { title: 'About Me', content: 'Content not available yet.' };
    },
  },

  Mutation: {
    // Auth mutations
    register: async (_, { input }) => {
      const { name, email, password } = input;
      
      // Check if user already exists
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        throw new AuthenticationError('User already exists with this email');
      }
      
      // Create new user
      const user = new UserModel({
        name,
        email,
        password,
        role: 'USER',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      
      const savedUser = await user.save();
      
      // Generate token
      const token = generateToken(savedUser.id, savedUser.email, savedUser.role);
      
      return {
        token,
        user: savedUser,
      };
    },
    
    login: async (_, { input }) => {
      const { email, password } = input;
      
      // Find user by email
      const user = await UserModel.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }
      
      // Check password
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        throw new AuthenticationError('Invalid credentials');
      }
      
      // Generate token
      const token = generateToken(user.id, user.email, user.role);
      
      return {
        token,
        user,
      };
    },
    // Project mutations
    createProject: async (_, { input }) => {
      const newProject = new ProjectModel({
        ...input,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      return await newProject.save();
    },
    updateProject: async (_, { id, input }) => {
      return await ProjectModel.findByIdAndUpdate(
        id,
        { ...input, updatedAt: new Date().toISOString() },
        { new: true }
      );
    },
    deleteProject: async (_, { id }) => {
      const result = await ProjectModel.findByIdAndDelete(id);
      return !!result;
    },

    // Skill mutations
    createSkill: async (_, { input }) => {
      const newSkill = new SkillModel({
        ...input,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      return await newSkill.save();
    },
    updateSkill: async (_, { id, input }) => {
      return await SkillModel.findByIdAndUpdate(
        id,
        { ...input, updatedAt: new Date().toISOString() },
        { new: true }
      );
    },
    deleteSkill: async (_, { id }) => {
      const result = await SkillModel.findByIdAndDelete(id);
      return !!result;
    },

    // Education mutations
    createEducation: async (_, { input }) => {
      const newEducation = new EducationModel({
        ...input,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      return await newEducation.save();
    },
    updateEducation: async (_, { id, input }) => {
      return await EducationModel.findByIdAndUpdate(
        id,
        { ...input, updatedAt: new Date().toISOString() },
        { new: true }
      );
    },
    deleteEducation: async (_, { id }) => {
      const result = await EducationModel.findByIdAndDelete(id);
      return !!result;
    },

    // Contact message mutations
    createContactMessage: async (_, { input }) => {
      const newContactMessage = new ContactMessageModel({
        ...input,
        read: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      const savedMessage = await newContactMessage.save();
      
      // Publish for subscription
      pubsub.publish(NEW_CONTACT_MESSAGE, { newContactMessage: savedMessage });
      
      return savedMessage;
    },
    markContactMessageAsRead: async (_, { id }) => {
      return await ContactMessageModel.findByIdAndUpdate(
        id,
        { read: true, updatedAt: new Date().toISOString() },
        { new: true }
      );
    },
    deleteContactMessage: async (_, { id }) => {
      const result = await ContactMessageModel.findByIdAndDelete(id);
      return !!result;
    },

    // About mutations
    updateAbout: async (_, { input }) => {
      const aboutData = await AboutModel.findOne();
      
      if (aboutData) {
        return await AboutModel.findByIdAndUpdate(
          aboutData.id,
          { ...input, updatedAt: new Date().toISOString() },
          { new: true }
        );
      } else {
        const newAbout = new AboutModel({
          ...input,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        return await newAbout.save();
      }
    },
  },

  Subscription: {
    newContactMessage: {
      subscribe: () => pubsub.asyncIterator([NEW_CONTACT_MESSAGE]),
    },
  },
};