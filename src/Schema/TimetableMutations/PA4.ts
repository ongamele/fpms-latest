import { GraphQLList } from 'graphql';
import { PAType } from '../TypeDefs/PA';
import { PA4 } from '../../Entities/PA4';

export const GET_PA4 = {
  type: new GraphQLList(PAType),
  resolve() {
    return PA4.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
