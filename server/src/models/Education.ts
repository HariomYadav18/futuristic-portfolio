import mongoose, { Document, Schema } from 'mongoose';

export interface IEducation extends Document {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate?: string;
  description?: string;
  location?: string;
  createdAt: string;
  updatedAt: string;
}

const EducationSchema: Schema = new Schema({
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String },
  description: { type: String },
  location: { type: String },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true }
});

export const EducationModel = mongoose.model<IEducation>('Education', EducationSchema);