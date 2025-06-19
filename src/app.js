import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes.js';
import { connectDB } from './config/database.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', authRoutes);
app.get('/health', (req, res) => res.json({ status: 'ok' }));

connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
  