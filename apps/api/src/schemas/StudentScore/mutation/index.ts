import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { StudentScoreQuery } from '../query';
import { StudentScoreType } from '../type';
import { StudentScoreUseCases } from 'apps/api/src/useCases/StudentScore';
import { StudentScore } from 'apps/api/src/types';

export const StudentScoreMutation = new GraphQLObjectType({
  name: 'studentScoreMutation',
  fields: {
    createStudentScore: {
      type: StudentScoreType,
      args: {
        id: { type: GraphQLString },
        testId: { type: GraphQLString },
        studentId: { type: GraphQLString },
        score: { type: GraphQLFloat },
      },
      resolve: async (parent, args: StudentScore) => {
        const { Create } = StudentScoreUseCases();
        const response = await Create(args);
        return response;
      },
    },
    updateStudentScore: {
      type: StudentScoreType,
      args: {
        id: { type: GraphQLString },
        testId: { type: GraphQLString },
        studentId: { type: GraphQLString },
        score: { type: GraphQLFloat },
      },
      resolve: async (parent, args: StudentScore) => {
        const { Update } = StudentScoreUseCases();
        const response = await Update(args);
        return response;
      },
    },
    deleteStudentScore: {
      type: StudentScoreType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (parent, args: { id: string }) => {
        const { Delete } = StudentScoreUseCases();
        const response = await Delete(args.id);
        return response;
      },
    },
  },
});
