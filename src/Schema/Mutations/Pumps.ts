import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { PumpsType } from '../TypeDefs/PumpsType';
import { Pumps } from '../../Entities/Pumps';

export const CREATE_PUMP = {
  type: PumpsType,
  args: {
    PumpName: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { PumpName } = args;
    const pump = await Pumps.insert({
      PumpID: PumpName,
    });

    return pump;
  },
};
