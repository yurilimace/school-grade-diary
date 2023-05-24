import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import { TestGraphQLType } from '../type';
import { TestUseCases } from 'apps/api/src/useCases/Test';

export const TestMutation = new GraphQLObjectType({
  name: 'TestMutations',
  fields: {
    createTest: {
      type: TestGraphQLType,
      args: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        studentClassId: { type: GraphQLString },
        maxScore: { type: GraphQLInt },
        subject: { type: GraphQLString },
      },

      resolve: async (parent, args) => {
        const useCases = TestUseCases();
        const response = await useCases.Create(args);
        return response;
      },
    },
    updateTest: {
      type: TestGraphQLType,
      args: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        studentClassId: { type: GraphQLString },
        maxScore: { type: GraphQLInt },
        subject: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const useCases = TestUseCases();
        const response = await useCases.Update(args);
        return response;
      },
    },
    deletTest: {
      type: TestGraphQLType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const useCases = TestUseCases();
        const response = await useCases.Delete(args.id);
        return response;
      },
    },
  },
});
