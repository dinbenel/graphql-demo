import { config } from 'dotenv';
config();
export const devConfig = {
  port: 8080,
  jwtAccess: process.env.JWT_ACCESS_SECRET,
  jwtRefresh: process.env.JWT_REFRESH_SECRET,
};
