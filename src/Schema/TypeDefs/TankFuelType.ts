import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

export const TankFuelType = new GraphQLObjectType({
  name: 'TankFuelType',
  fields: () => ({
    ID: { type: GraphQLInt },
    TankID: { type: GraphQLString },
    Readings: { type: GraphQLInt },
    Date: { type: GraphQLString },
    Number: { type: GraphQLInt },
  }),
});
