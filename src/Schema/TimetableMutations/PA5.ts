import { GraphQLList } from 'graphql';
import { PAType } from '../TypeDefs/PA';
import { PA5 } from '../../Entities/PA5';

export const GET_PA5 = {
  type: new GraphQLList(PAType),
  resolve() {
    return PA5.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
