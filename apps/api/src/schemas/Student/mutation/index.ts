import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import { StudentType } from '../type';
import { Student } from 'apps/api/src/types';
import { StudentUseCases } from 'apps/api/src/useCases/Student';

export const StudentMutation = new GraphQLObjectType({
  name: 'studentMutation',
  fields: {
    CreateStudent: {
      type: StudentType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        studentClassId: { type: GraphQLString },
      },
      resolve: async (parent, args: Student, context) => {
        const { Create } = StudentUseCases();
        const response = await Create(args);
        return response;
      },
    },
    UpdateStudent: {
      type: StudentType,
      args: {
        name: { type: GraphQLString },
        id: { type: GraphQLString },
        age: { type: GraphQLInt },
        studentClassId: { type: GraphQLString },
      },
      resolve: async (parent, args: Student, context) => {
        const { Update } = StudentUseCases();
        const response = await Update(args);
        return response;
      },
    },
    DeleteStudent: {
      type: StudentType,
      resolve: async (parent, args: Student, context) => {
        const { Delete } = StudentUseCases();
        const response = await Delete(args);
        return response;
      },
    },
  },
});
