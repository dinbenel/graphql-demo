import { Request, Response } from 'express';
import { UserTypeDefs as User } from '../typeDefs/index';

export interface Context {
  req: Request;
  res: Response;
  user: User | null;
}
