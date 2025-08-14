import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: [String], required: true },
  imageUrl: { type: String },
  githubUrl: { type: String },
  liveUrl: { type: String },
  featured: { type: Boolean, required: true, default: false },
  category: { 
    type: String, 
    required: true,
    enum: ['WEB', 'MOBILE', 'DESKTOP', 'BACKEND', 'OTHER']
  },
  date: { type: String, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true }
});

export const ProjectModel = mongoose.model<IProject>('Project', ProjectSchema);