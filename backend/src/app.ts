import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import trackRoutes from './routes/tracks';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tracks', trackRoutes);

export default app;