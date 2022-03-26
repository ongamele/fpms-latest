import { GraphQLList } from 'graphql';
import { PAType } from '../TypeDefs/PA';
import { PA3 } from '../../Entities/PA3';

export const GET_PA3 = {
  type: new GraphQLList(PAType),
  resolve() {
    return PA3.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
