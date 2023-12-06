import { Clerk, User } from '@clerk/clerk-sdk-node';
import { authClient } from '../lib/auth.client';
import DBClient from '../lib/db.client';
import { UserInput } from '../typeDefs/User/userInput.type';
import { devConfig } from '../config/development';

const prisma = DBClient.getInstance().prisma;

export class UserService {
  private readonly _auth = authClient.auth;
  async create({
    email,
    password,
    userName,
  }: {
    email: string;
    password: string;
    userName: string;
  }): Promise<User | undefined> {
    try {
      const user = await this._auth.users.createUser({
        password,
        passwordHasher: 'bcrypt',
        totpSecret: devConfig.hash,
        emailAddress: [email],
        username: userName,
      });
      return user;
    } catch (error: any) {
      console.log('ERRRRRR');
      console.log(error.errors);
    }
    // const user = await prisma.user.create({
    //   data: {
    //     email,
    //     userName,
    //     profile: {
    //       create: {
    //         provider,
    //         password,
    //       },
    //     },
    //   },
    // });
  }

  findByMail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}
