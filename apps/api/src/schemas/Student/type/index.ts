import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

export const StudentType = new GraphQLObjectType({
  name: 'studentType',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    studentClassId: { type: GraphQLString },
  },
});
