import { GraphQLList } from 'graphql';
import { PAType } from '../TypeDefs/PA';
import { PA13 } from '../../Entities/PA13';

export const GET_PA13 = {
  type: new GraphQLList(PAType),
  resolve() {
    return PA13.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
