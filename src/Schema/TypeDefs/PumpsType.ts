import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import { FuelType } from './FuelType';

export const PumpsType = new GraphQLObjectType({
  name: 'PumpsType',
  fields: () => ({
    PumpID: { type: GraphQLString },
    unleaded93: { type: new GraphQLList(FuelType) },
    unleaded95: { type: new GraphQLList(FuelType) },
    diesel10: { type: new GraphQLList(FuelType) },
  }),
});
