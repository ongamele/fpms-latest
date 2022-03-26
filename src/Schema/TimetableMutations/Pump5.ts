import { GraphQLList } from 'graphql';
import { PumpsType } from '../TypeDefs/Pumps';
import { Pump5 } from '../../Entities/Pump5';

export const GET_PUMP_5 = {
  type: new GraphQLList(PumpsType),
  resolve() {
    return Pump5.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
