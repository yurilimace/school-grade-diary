import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

export const TestGraphQLType = new GraphQLObjectType({
  name: 'TestGraphQLType',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    studentClassId: { type: GraphQLString },
    maxScore: { type: GraphQLInt },
    subject: { type: GraphQLString },
  },
});
