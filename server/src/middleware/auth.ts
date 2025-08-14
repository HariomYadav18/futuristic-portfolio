import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { logger } from '../utils/logger';

interface DecodedToken {
  userId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

interface AuthRequest extends Request {
  user?: DecodedToken;
}

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

/**
 * Middleware to authenticate JWT tokens
 */
export const authenticate = (req: AuthRequest, res: Response, next: NextFunction): void => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      req.user = undefined;
      return next();
    }
    
    // Check if token format is valid
    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      req.user = undefined;
      return next();
    }
    
    const token = parts[1];
    
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
    req.user = decoded;
    
    next();
  } catch (error) {
    logger.error('Authentication error:', error);
    req.user = undefined;
    next();
  }
};

/**
 * Middleware to require authentication
 */
export const requireAuth = (req: AuthRequest, res: Response, next: NextFunction): void => {
  if (!req.user) {
    res.status(401).json({ message: 'Authentication required' });
    return;
  }
  next();
};

/**
 * Middleware to require admin role
 */
export const requireAdmin = (req: AuthRequest, res: Response, next: NextFunction): void => {
  if (!req.user) {
    res.status(401).json({ message: 'Authentication required' });
    return;
  }
  
  if (req.user.role !== 'ADMIN') {
    res.status(403).json({ message: 'Admin privileges required' });
    return;
  }
  
  next();
};

/**
 * Helper function to generate JWT token
 */
export const generateToken = (userId: string, email: string, role: string): string => {
  return jwt.sign(
    { userId, email, role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
};