import 'reflect-metadata';
import { config } from 'dotenv';
config();
import express from 'express';
import { createYoga } from 'graphql-yoga';
import { buildSchema } from 'type-graphql';
import { ProductResolver, UserResolver } from './resolvers';
import { devConfig } from './config/development';

(async () => {
  const PORT = process.env.PORT || devConfig.port;
  const app = express();
  const schema = await buildSchema({
    resolvers: [UserResolver, ProductResolver],
  });
  const gqlYoga = createYoga({
    schema,
  });

  app.use(gqlYoga);
  app.listen(PORT, () =>
    console.log(`app is runnig on http://localhost:${PORT}/graphql`)
  );
})();
