import ExtendedClerk, { Clerk } from '@clerk/clerk-sdk-node';
import { devConfig } from '../config/development';

export class AuthClient {
  private _authClient: typeof ExtendedClerk;
  constructor() {
    this._authClient = Clerk({
      secretKey: devConfig.clerkSecret,
    });
  }

  get auth(): typeof ExtendedClerk {
    return this._authClient;
  }
}

export const authClient = new AuthClient();
