import { GraphQLList } from 'graphql';
import { PAType } from '../TypeDefs/PA';
import { PA6 } from '../../Entities/PA6';

export const GET_PA6 = {
  type: new GraphQLList(PAType),
  resolve() {
    return PA6.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
