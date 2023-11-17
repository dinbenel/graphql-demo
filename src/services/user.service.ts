import { User } from '@prisma/client';
import DBClient from '../lib/db.client';
import { createUserInput } from '../types/user.type';

const prisma = DBClient.getInstance().prisma;

export class UserService {
  async create({ email, password, userName, provider }: createUserInput) {
    const user = await prisma.user.create({
      data: {
        email,
        userName,
        profile: {
          create: {
            provider,
            password,
          },
        },
      },
    });
    return user;
  }

  findByMail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}
