import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

export const FuelType = new GraphQLObjectType({
  name: 'FuelType',
  fields: () => ({
    ID: { type: GraphQLInt },
    PumpID: { type: GraphQLString },
    Readings: { type: GraphQLInt },
    Date: { type: GraphQLString },
    Number: { type: GraphQLInt },
  }),
});
