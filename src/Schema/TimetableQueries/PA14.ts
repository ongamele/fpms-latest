import { GraphQLList } from 'graphql';
import { PAType } from '../TypeDefs/PA';
import { PA14 } from '../../Entities/PA14';

export const GET_PA14 = {
  type: new GraphQLList(PAType),
  resolve() {
    return PA14.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
