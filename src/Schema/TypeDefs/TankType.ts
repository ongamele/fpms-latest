import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import { TankFuelType } from './TankFuelType';

export const TankType = new GraphQLObjectType({
  name: 'TankType',
  fields: () => ({
    TankID: { type: GraphQLString },
    unleaded93Tank: { type: new GraphQLList(TankFuelType) },
    unleaded95Tank: { type: new GraphQLList(TankFuelType) },
    diesel10Tank: { type: new GraphQLList(TankFuelType) },
  }),
});
