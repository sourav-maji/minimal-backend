// src/routes/auth.routes.js

import express from 'express';
import {register,login,refreshToken,logout,protectedRoute} from '../controllers/auth.controller.js';
import { authenticate } from '../utils/auth.middleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh-token', refreshToken);
router.post('/logout', logout);
router.get('/protected', authenticate, protectedRoute);

export default router;