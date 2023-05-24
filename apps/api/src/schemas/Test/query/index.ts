import { GraphQLList, GraphQLObjectType } from 'graphql';
import { TestGraphQLType } from '../type';
import { TestUseCases } from 'apps/api/src/useCases/Test';

export const TestQuery = new GraphQLObjectType({
  name: 'TestGraphQLQuery',
  fields: {
    listAll: {
      type: new GraphQLList(TestGraphQLType),
      resolve: async () => {
        const useCases = TestUseCases();
        const response = await useCases.ListAllTests();

        return response;
      },
    },
  },
});
