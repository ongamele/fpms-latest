import { GraphQLList } from 'graphql';
import { PAType } from '../TypeDefs/PA';
import { PA11 } from '../../Entities/PA11';

export const GET_PA11 = {
  type: new GraphQLList(PAType),
  resolve() {
    return PA11.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
