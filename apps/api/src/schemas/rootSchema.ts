import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { StudentClassQuery } from './StudentClass/query';
import { StudentClassMutations } from './StudentClass/mutation';

const rootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  fields: {
    ...StudentClassQuery.toConfig().fields,
  },
});

const rootMutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    ...StudentClassMutations.toConfig().fields,
  },
});

export const rootSchema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});
