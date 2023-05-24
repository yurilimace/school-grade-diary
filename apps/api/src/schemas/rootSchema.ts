import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { StudentClassQuery } from './StudentClass/query';
import { StudentClassMutations } from './StudentClass/mutation';
import { StudentQuery } from './Student/query';
import { StudentMutation } from './Student/mutation';
import { TestQuery } from './Test/query';
import { TestMutation } from './Test/mutation';

const rootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  fields: {
    ...StudentClassQuery.toConfig().fields,
    ...StudentQuery.toConfig().fields,
    ...TestQuery.toConfig().fields,
  },
});

const rootMutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    ...StudentClassMutations.toConfig().fields,
    ...StudentMutation.toConfig().fields,
    ...TestMutation.toConfig().fields,
  },
});

export const rootSchema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});
