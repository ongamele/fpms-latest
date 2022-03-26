import { GraphQLList } from 'graphql';
import { PAType } from '../TypeDefs/PA';
import { PA1 } from '../../Entities/PA1';

export const GET_PA1 = {
  type: new GraphQLList(PAType),
  resolve() {
    return PA1.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
