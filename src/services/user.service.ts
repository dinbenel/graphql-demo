import DBClient from '../lib/db.client';
import { hashSync } from 'bcrypt';
import { authService } from './auth.service';
import { UserInput } from '../typeDefs/User/userInput.type';
import { User, UserData } from '../typeDefs/User/user.type';
import { generateResponseData } from '../utils/helpers';

const prisma = DBClient.getInstance().prisma;
export class UserService {
  async create({ email, password, userName }: UserInput): Promise<UserData> {
    try {
      const hashPassword = hashSync(password, 10);
      const clerkUser = await authService.createUser({
        email,
        userName,
        password: hashPassword,
      });
      if (!clerkUser) throw new Error('cannot create user clerk');
      const user = await prisma.user.create({
        data: {
          authId: clerkUser.id,
          email,
          userName,
        },
      });
      return generateResponseData<User>({ data: user, error: undefined });
    } catch (error) {
      console.log('ERRRRRR', error.errors);
      return generateResponseData<undefined>({
        data: undefined,
        error: error.errors[0].message,
      });
    }
  }

  findByMail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}
