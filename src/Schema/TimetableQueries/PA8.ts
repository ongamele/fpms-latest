import { GraphQLList } from 'graphql';
import { PAType } from '../TypeDefs/PA';
import { PA8 } from '../../Entities/PA8';

export const GET_PA8 = {
  type: new GraphQLList(PAType),
  resolve() {
    return PA8.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
