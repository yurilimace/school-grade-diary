import { GraphQLObjectType, GraphQLString } from 'graphql';

export const StudentClassType = new GraphQLObjectType({
  name: 'StudentClass',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});
