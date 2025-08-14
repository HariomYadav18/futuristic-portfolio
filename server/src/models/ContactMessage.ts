import mongoose, { Document, Schema } from 'mongoose';

export interface IContactMessage extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
  updatedAt: string;
}

const ContactMessageSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  read: { type: Boolean, required: true, default: false },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true }
});

export const ContactMessageModel = mongoose.model<IContactMessage>('ContactMessage', ContactMessageSchema);