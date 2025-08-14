import mongoose, { Document, Schema } from 'mongoose';

export interface ISkill extends Document {
  name: string;
  icon?: string;
  level: number;
  category: string;
  createdAt: string;
  updatedAt: string;
}

const SkillSchema: Schema = new Schema({
  name: { type: String, required: true },
  icon: { type: String },
  level: { type: Number, required: true, min: 1, max: 100 },
  category: { 
    type: String, 
    required: true,
    enum: ['FRONTEND', 'BACKEND', 'DATABASE', 'DEVOPS', 'OTHER']
  },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true }
});

export const SkillModel = mongoose.model<ISkill>('Skill', SkillSchema);