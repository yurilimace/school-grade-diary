import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const customType = new GraphQLObjectType({
  name: 'teste',
  fields: {
    message: { type: GraphQLString, resolve: () => 'hello world' },
  },
});

const customSchema = new GraphQLSchema({
  query: customType,
});

const StartApolloServer = async () => {
  const server = new ApolloServer({ schema: customSchema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(url);
};

StartApolloServer();
