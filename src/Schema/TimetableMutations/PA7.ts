import { GraphQLList } from 'graphql';
import { PAType } from '../TypeDefs/PA';
import { PA7 } from '../../Entities/PA7';

export const GET_PA7 = {
  type: new GraphQLList(PAType),
  resolve() {
    return PA7.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
