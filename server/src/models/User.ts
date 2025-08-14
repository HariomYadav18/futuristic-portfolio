import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    lowercase: true
  },
  password: { 
    type: String, 
    required: true,
    minlength: 6
  },
  name: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    enum: ['ADMIN', 'USER'],
    default: 'USER'
  },
  createdAt: { 
    type: String, 
    required: true 
  },
  updatedAt: { 
    type: String, 
    required: true 
  }
});

// Hash password before saving
UserSchema.pre<IUser>('save', async function(next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password along with the new salt
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// Method to compare password for login
UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const UserModel = mongoose.model<IUser>('User', UserSchema);