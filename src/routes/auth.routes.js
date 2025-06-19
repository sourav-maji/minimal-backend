import express from 'express';
import { login, protectedRoute } from '../controllers/auth.controller.js';
import { authenticate } from '../utils/auth.middleware.js';

const router = express.Router();

router.post('/login', login);
router.get('/protected', authenticate, protectedRoute);

export default router;
  