import { Request, Response } from 'express';
import { UserModel } from '../models/User';
import { generateToken } from '../middleware/auth';
import { logger } from '../utils/logger';

/**
 * Register a new user
 */
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    // Create new user
    const user = new UserModel({
      name,
      email,
      password,
      role: 'USER', // Default role
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // Save user to database
    await user.save();

    // Generate JWT token
    const token = generateToken(user.id, user.email, user.role);

    // Return user data and token
    res.status(201).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    logger.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * Login user
 */
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    // Generate JWT token
    const token = generateToken(user.id, user.email, user.role);

    // Return user data and token
    res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    logger.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * Get current user
 */
export const getCurrentUser = async (req: Request, res: Response): Promise<void> => {
  try {
    // @ts-ignore - user is added by auth middleware
    const userId = req.user?.userId;
    
    if (!userId) {
      res.status(401).json({ message: 'Not authenticated' });
      return;
    }

    const user = await UserModel.findById(userId).select('-password');
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    logger.error('Get current user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};