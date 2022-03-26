import { GraphQLList } from 'graphql';
import { PAType } from '../TypeDefs/PA';
import { PA12 } from '../../Entities/PA12';

export const GET_PA12 = {
  type: new GraphQLList(PAType),
  resolve() {
    return PA12.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
