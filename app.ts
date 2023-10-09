import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Define your routes here
// Routes
import userRoutes from './app/routes/userRoutes'

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
