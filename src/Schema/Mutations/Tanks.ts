import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { TankType } from '../TypeDefs/TankType';
import { Tanks } from '../../Entities/Tanks';

export const CREATE_TANK = {
  type: TankType,
  args: {
    TankName: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { TankName } = args;
    const tank = await Tanks.insert({
      TankID: TankName,
    });

    return tank;
  },
};
