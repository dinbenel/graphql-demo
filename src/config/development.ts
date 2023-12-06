import { config } from 'dotenv';
config();
export const devConfig = {
  port: 8080,
  hash: process.env.HASH_SECRET,
  clerkSecret: process.env.CLERK_SECRET_KEY,
};
