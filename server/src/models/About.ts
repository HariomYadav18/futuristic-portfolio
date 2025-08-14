import mongoose, { Document, Schema } from 'mongoose';

export interface IAbout extends Document {
  title: string;
  content: string;
  imageUrl?: string;
  resumeUrl?: string;
  createdAt: string;
  updatedAt: string;
}

const AboutSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String },
  resumeUrl: { type: String },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true }
});

export const AboutModel = mongoose.model<IAbout>('About', AboutSchema);