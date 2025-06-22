// src/controllers/auth.controller.js

import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import AppError from '../utils/AppError.js';
import {generateTokens,verifyRefreshToken,revokeRefreshToken } from '../utils/token.service.js';

export const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new AppError('Username already taken', 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword });

    const tokens = generateTokens({ id: newUser._id, username: newUser.username });
    res.status(201).json(tokens);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new AppError('Invalid credentials', 401);
    }

    const tokens = generateTokens({ id: user._id, username: user.username });
    res.json(tokens);
  } catch (err) {
    next(err);
  }
};

export const refreshToken = (req, res, next) => {
  try {
    const { token } = req.body;
    if (!token) throw new AppError('Refresh token required', 400);

    const payload = verifyRefreshToken(token);
    const newTokens = generateTokens({ id: payload.id, username: payload.username });
    res.json(newTokens);
  } catch (err) {
    next(new AppError('Invalid or expired refresh token', 403));
  }
};

export const logout = (req, res) => {
  const { token } = req.body;
  if (token) revokeRefreshToken(token);
  res.json({ message: 'Logged out successfully' });
};

export const protectedRoute = (req, res) => {
  res.json({ message: 'Access granted to protected route', user: req.user });
};