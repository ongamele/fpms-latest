import { GraphQLList } from 'graphql';
import { PAType } from '../TypeDefs/PA';
import { PA9 } from '../../Entities/PA9';

export const GET_PA9 = {
  type: new GraphQLList(PAType),
  resolve() {
    return PA9.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
