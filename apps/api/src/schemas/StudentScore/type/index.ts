import { GraphQLFloat, GraphQLObjectType, GraphQLString } from 'graphql';

export const StudentScoreType = new GraphQLObjectType({
  name: 'StudentScoreGraphQLType',
  fields: {
    id: { type: GraphQLString },
    studentId: { type: GraphQLString },
    testId: { type: GraphQLString },
    score: { type: GraphQLFloat },
  },
});
