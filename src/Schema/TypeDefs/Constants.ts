import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
} from 'graphql';

export const ConstantsType = new GraphQLObjectType({
  name: 'Constants',
  fields: () => ({
    UniqueID: { type: GraphQLInt },
    EventTime: { type: GraphQLString },
    Fuel_Price_95: { type: GraphQLFloat },
    Fuel_Price_93: { type: GraphQLFloat },
    Fuel_Price_Diesel: { type: GraphQLFloat },
  }),
});
