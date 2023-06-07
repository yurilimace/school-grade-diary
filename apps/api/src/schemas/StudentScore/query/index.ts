import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import { StudentScoreType } from '../type';

import { StudentScoreUseCases } from 'apps/api/src/useCases/StudentScore';

export const StudentScoreQuery = new GraphQLObjectType({
  name: 'StudentScoreQuery',
  fields: {
    studentScoreList: {
      type: new GraphQLList(StudentScoreType),
      args: {
        studentScoreId: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const useCases = StudentScoreUseCases();
        const response = await useCases.FindById(args.studentScoreId);
        return response;
      },
    },
  },
});
