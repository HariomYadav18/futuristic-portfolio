import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # User type
  type User {
    id: ID!
    name: String!
    email: String!
    role: UserRole!
    createdAt: String!
    updatedAt: String!
  }

  # User role enum
  enum UserRole {
    ADMIN
    USER
  }

  # Auth type
  type Auth {
    token: String!
    user: User!
  }
  # Project type
  type Project {
    id: ID!
    title: String!
    description: String!
    technologies: [String!]!
    imageUrl: String
    githubUrl: String
    liveUrl: String
    featured: Boolean!
    category: ProjectCategory!
    date: String!
    createdAt: String!
    updatedAt: String!
  }

  # Project category enum
  enum ProjectCategory {
    WEB
    MOBILE
    DESKTOP
    BACKEND
    OTHER
  }

  # Skill type
  type Skill {
    id: ID!
    name: String!
    icon: String
    level: Int!
    category: SkillCategory!
    createdAt: String!
    updatedAt: String!
  }

  # Skill category enum
  enum SkillCategory {
    FRONTEND
    BACKEND
    DATABASE
    DEVOPS
    OTHER
  }

  # Education type
  type Education {
    id: ID!
    institution: String!
    degree: String!
    fieldOfStudy: String!
    startDate: String!
    endDate: String
    description: String
    location: String
    createdAt: String!
    updatedAt: String!
  }

  # Contact message type
  type ContactMessage {
    id: ID!
    name: String!
    email: String!
    subject: String!
    message: String!
    read: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  # About type
  type About {
    id: ID!
    title: String!
    content: String!
    imageUrl: String
    createdAt: String!
    updatedAt: String!
  }

  # Input types for mutations
  input ProjectInput {
    title: String!
    description: String!
    technologies: [String!]!
    imageUrl: String
    githubUrl: String
    liveUrl: String
    featured: Boolean!
    category: ProjectCategory!
    date: String!
  }

  input SkillInput {
    name: String!
    icon: String
    level: Int!
    category: SkillCategory!
  }

  input EducationInput {
    institution: String!
    degree: String!
    fieldOfStudy: String!
    startDate: String!
    endDate: String
    description: String
    location: String
  }

  input ContactMessageInput {
    name: String!
    email: String!
    subject: String!
    message: String!
  }

  input AboutInput {
    title: String!
    content: String!
    imageUrl: String
  }

  # User input types
  input RegisterInput {
    name: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  # Queries
  type Query {
    # User queries
    me: User
    users: [User!]!
    user(id: ID!): User

    # Project queries
    projects: [Project!]!
    project(id: ID!): Project
    projectsByCategory(category: ProjectCategory!): [Project!]!
    featuredProjects: [Project!]!

    # Skill queries
    skills: [Skill!]!
    skill(id: ID!): Skill
    skillsByCategory(category: SkillCategory!): [Skill!]!

    # Education queries
    educations: [Education!]!
    education(id: ID!): Education

    # Contact message queries
    contactMessages: [ContactMessage!]!
    contactMessage(id: ID!): ContactMessage
    unreadContactMessages: [ContactMessage!]!

    # About queries
    about: About
  }

  # Mutations
  type Mutation {
    # Auth mutations
    register(input: RegisterInput!): Auth!
    login(input: LoginInput!): Auth!
    
    # Project mutations
    createProject(input: ProjectInput!): Project!
    updateProject(id: ID!, input: ProjectInput!): Project!
    deleteProject(id: ID!): Boolean!

    # Skill mutations
    createSkill(input: SkillInput!): Skill!
    updateSkill(id: ID!, input: SkillInput!): Skill!
    deleteSkill(id: ID!): Boolean!

    # Education mutations
    createEducation(input: EducationInput!): Education!
    updateEducation(id: ID!, input: EducationInput!): Education!
    deleteEducation(id: ID!): Boolean!

    # Contact message mutations
    createContactMessage(input: ContactMessageInput!): ContactMessage!
    markContactMessageAsRead(id: ID!): ContactMessage!
    deleteContactMessage(id: ID!): Boolean!

    # About mutations
    updateAbout(input: AboutInput!): About!
  }

  # Subscription
  type Subscription {
    newContactMessage: ContactMessage!
  }
`;