import { GraphQLObjectType, GraphQLString } from 'graphql';
import { StudentClassType } from '../type';
import { StudentClassOperations } from '../../../useCases/StudentClass';

export const StudentClassMutations = new GraphQLObjectType({
  name: 'studentClassMutation',
  fields: {
    CreateStudentClass: {
      type: StudentClassType,
      args: {
        name: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const { Create } = StudentClassOperations();
        const response = await Create(args.name);
        return response;
      },
    },
    UpdateStudentClass: {
      type: StudentClassType,
      args: {
        newName: { type: GraphQLString },
        id: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        const { Update } = StudentClassOperations();
        const response = await Update(args.id, args.newName);
        return response;
      },
    },
  },
});
