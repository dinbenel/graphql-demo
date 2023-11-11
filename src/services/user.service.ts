import DBClient from '../lib/db.client';

const prisma = DBClient.getInstance().prisma;

export class UserService {
  async create() {
    try {
      const user = await prisma.user.create({
        data: {
          name: 'dino',
          lastName: 'dino',
        },
      });
      return user;
    } catch (error) {
      console.log(`cant create user ${error}`);
    }
  }
}
