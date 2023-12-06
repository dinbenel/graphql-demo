import { Request, Response } from 'express';
import { User } from '../typeDefs/User/user.type';

export interface Context {
  req: Request;
  res: Response;
  user: User | null;
}
