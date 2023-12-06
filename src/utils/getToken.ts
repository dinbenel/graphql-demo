import { verify } from 'jsonwebtoken';
import { devConfig } from '../config/development';

export const getUserFromHeader = (tokenStr: string) => {
  const token = tokenStr.replace('Bearer', '').trim();
  const user = verify(token, devConfig.jwtAccess);
  if (typeof user === 'object') {
    return { user };
  }
  return {};
};
