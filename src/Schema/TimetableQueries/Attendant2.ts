import { GraphQLList } from 'graphql';
import { PAType } from '../TypeDefs/PA';
import { PA2 } from '../../Entities/PA2';

export const GET_PA2 = {
  type: new GraphQLList(PAType),
  resolve() {
    return PA2.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
