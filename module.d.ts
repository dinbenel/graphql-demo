declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    HASH_SECRET: string;
    CLERK_SECRET_KEY: string;
  }
}
