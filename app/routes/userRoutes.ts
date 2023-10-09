// const express = require('express');
// const router = express.Router();

// module.exports = (prisma: any) => {
//   // GET all users
//   router.get('/', async (req: any, res: any) => {
//     const users = await prisma.user.findMany();
//     res.json(users);
//   });

//   // GET user by ID
//   router.get('/:id', async (req: any, res: any) => {
//     const { id } = req.params;
//     const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
//     res.json(user);
//   });

//   // POST create user
//   router.post('/', async (req: any, res: any) => {
//     const { name, email } = req.body;
//     const newUser = await prisma.user.create({ data: { name, email } });
//     res.json(newUser);
//   });

//   return router;
// };

import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();

export default (prisma: PrismaClient) => {
  // GET all users
  router.get('/', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
  });

  // GET user by ID
  router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    res.json(user);
  });

  // POST create user
  router.post('/', async (req: Request, res: Response) => {
    const { username, email, password, firstName, lastName } = req.body;
    const newUser = await prisma.user.create({ data: { username, email, password, firstName, lastName } });
    res.json(newUser);
  });

  return router;
};
