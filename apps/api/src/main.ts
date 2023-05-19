import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { rootSchema } from './schemas/rootSchema';

const StartApolloServer = async () => {
  const server = new ApolloServer({ schema: rootSchema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(url);
};

StartApolloServer();
