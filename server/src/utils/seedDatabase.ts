import mongoose from 'mongoose';
import { ProjectModel } from '../models/Project';
import { SkillModel } from '../models/Skill';
import { EducationModel } from '../models/Education';
import { AboutModel } from '../models/About';
import { UserModel } from '../models/User';
import { connectDatabase, disconnectDatabase } from '../config/database';
import { logger } from './logger';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Sample data
const projects = [
  {
    title: 'Futuristic Portfolio',
    description: 'A modern portfolio website with 3D elements and interactive UI.',
    technologies: ['React', 'Three.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: 'https://example.com/portfolio.jpg',
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://portfolio.example.com',
    featured: true,
    category: 'WEB',
    date: '2023-06-15',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    imageUrl: 'https://example.com/ecommerce.jpg',
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://ecommerce.example.com',
    featured: true,
    category: 'WEB',
    date: '2023-04-10',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    title: 'Mobile Task Manager',
    description: 'A cross-platform mobile app for task management.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    imageUrl: 'https://example.com/taskmanager.jpg',
    githubUrl: 'https://github.com/username/taskmanager',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.example.taskmanager',
    featured: false,
    category: 'MOBILE',
    date: '2023-02-20',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const skills = [
  {
    name: 'React',
    icon: 'react',
    level: 90,
    category: 'FRONTEND',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    name: 'TypeScript',
    icon: 'typescript',
    level: 85,
    category: 'FRONTEND',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    name: 'Node.js',
    icon: 'nodejs',
    level: 80,
    category: 'BACKEND',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    name: 'GraphQL',
    icon: 'graphql',
    level: 75,
    category: 'BACKEND',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    name: 'MongoDB',
    icon: 'mongodb',
    level: 85,
    category: 'DATABASE',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    name: 'Docker',
    icon: 'docker',
    level: 70,
    category: 'DEVOPS',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const education = [
  {
    institution: 'University of Technology',
    degree: 'Bachelor of Science',
    fieldOfStudy: 'Computer Science',
    startDate: '2018-09-01',
    endDate: '2022-06-30',
    description: 'Specialized in software engineering and web development.',
    location: 'San Francisco, CA',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    institution: 'Tech Bootcamp',
    degree: 'Certificate',
    fieldOfStudy: 'Full Stack Web Development',
    startDate: '2022-07-15',
    endDate: '2022-10-15',
    description: 'Intensive program focused on modern web technologies.',
    location: 'Online',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const about = {
  title: 'About Me',
  content: 'I am a passionate full-stack developer with expertise in modern web technologies. I love creating beautiful, responsive, and user-friendly applications that solve real-world problems.',
  imageUrl: 'https://example.com/profile.jpg',
  resumeUrl: 'https://example.com/resume.pdf',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'password123',
    role: 'ADMIN',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    name: 'Regular User',
    email: 'user@example.com',
    password: 'password123',
    role: 'USER',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// Seed function
async function seedDatabase() {
  try {
    // Connect to database
    await connectDatabase();
    logger.info('Connected to MongoDB');

    // Clear existing data
    await Promise.all([
      ProjectModel.deleteMany({}),
      SkillModel.deleteMany({}),
      EducationModel.deleteMany({}),
      AboutModel.deleteMany({}),
      UserModel.deleteMany({}),
    ]);
    logger.info('Cleared existing data');

    // Insert new data
    await Promise.all([
      ProjectModel.insertMany(projects),
      SkillModel.insertMany(skills),
      EducationModel.insertMany(education),
      AboutModel.create(about),
      ...users.map(user => new UserModel(user).save()),
    ]);
    logger.info('Inserted seed data');

    // Disconnect from database
    await disconnectDatabase();
    logger.info('Database seeding completed successfully');
    process.exit(0);
  } catch (error) {
    logger.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();