import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

export const MonthRangeType = new GraphQLObjectType({
  name: 'MonthRangeType',
  fields: () => ({
    ID: { type: GraphQLInt },
    MonthStart: { type: GraphQLString },
    MonthEnd: { type: GraphQLString },
  }),
});
