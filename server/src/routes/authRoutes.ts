import express from 'express';
import { register, login, getCurrentUser } from '../controllers/authController';
import { authenticate, requireAuth } from '../middleware/auth';

const router = express.Router();

// Register new user
router.post('/register', register);

// Login user
router.post('/login', login);

// Get current user (protected route)
router.get('/me', authenticate, requireAuth, getCurrentUser);

export default router;