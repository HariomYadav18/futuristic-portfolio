// Common types for the portfolio application

// Project type definition
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  date: string;
}

// Project category enum
export enum ProjectCategory {
  WEB = 'web',
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
  BACKEND = 'backend',
  OTHER = 'other'
}

// Skill type definition
export interface Skill {
  id: string;
  name: string;
  icon?: string;
  level: number; // 1-5 or 1-100 depending on how you want to display it
  category: SkillCategory;
}

// Skill category enum
export enum SkillCategory {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DATABASE = 'database',
  DEVOPS = 'devops',
  OTHER = 'other'
}

// Education type definition
export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate?: string;
  description?: string;
  location?: string;
}

// Contact form data type
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Theme settings
export interface ThemeSettings {
  darkMode: boolean;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

// Animation settings
export interface AnimationSettings {
  enabled: boolean;
  intensity: 'low' | 'medium' | 'high';
}

// User preferences
export interface UserPreferences {
  theme: ThemeSettings;
  animations: AnimationSettings;
}