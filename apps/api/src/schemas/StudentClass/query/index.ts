import { GraphQLList, GraphQLObjectType } from 'graphql';
import { StudentClassType } from '../type';
import { StudentClassOperations } from '../../../useCases/StudentClass';

export const StudentClassQuery = new GraphQLObjectType({
  name: 'studentClassQuery',
  fields: {
    StudentClassList: {
      type: new GraphQLList(StudentClassType),
      resolve: async () => {
        const { GetAll } = StudentClassOperations();
        const response = await GetAll();
        return response;
      },
    },
    StudentClassByName: {
      type: StudentClassType,
      resolve: async (parent, args, contextValue, info) => {
        const { GetByName } = StudentClassOperations();
        const response = await GetByName(args.name);
        return response;
      },
    },
  },
});
