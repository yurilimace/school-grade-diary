import { GraphQLObjectType, GraphQLString } from 'graphql';
import { StudentType } from '../type';
import { StudentUseCases } from 'apps/api/src/useCases/Student';

export const StudentQuery = new GraphQLObjectType({
  name: 'studentQuery',
  fields: {
    studentByName: {
      type: StudentType,
      args: {
        name: { type: GraphQLString },
      },
      resolve: async (parent, args, context) => {
        const { FindByName } = StudentUseCases();
        const response = await FindByName(args.name);
        return response[0];
      },
    },
  },
});
