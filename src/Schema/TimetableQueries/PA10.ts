import { GraphQLList } from 'graphql';
import { PAType } from '../TypeDefs/PA';
import { PA10 } from '../../Entities/PA10';

export const GET_PA10 = {
  type: new GraphQLList(PAType),
  resolve() {
    return PA10.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
