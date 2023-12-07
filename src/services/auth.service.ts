import { User } from '@clerk/clerk-sdk-node';
import { AuthClient, authClient } from '../lib/auth.client';
import { UserInput } from '../typeDefs/User/userInput.type';

class AuthService extends AuthClient {
  constructor() {
    super();
  }

  async createUser({
    password,
    email,
    userName,
  }: UserInput): Promise<User | null> {
    try {
      const user = await this.auth.users.createUser({
        password,
        emailAddress: [email],
        username: userName,
        skipPasswordRequirement: true,
        skipPasswordChecks: true,
      });
      return user;
    } catch (error) {
      console.log('error clerk');
      return null;
    }
  }
}

export const authService = new AuthService();
