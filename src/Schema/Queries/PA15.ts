import { GraphQLList } from 'graphql';
import { PAType } from '../TypeDefs/PA';
import { PA15 } from '../../Entities/PA15';

export const GET_PA15 = {
  type: new GraphQLList(PAType),
  resolve() {
    return PA15.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
