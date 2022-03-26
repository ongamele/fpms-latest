import { GraphQLList } from 'graphql';
import { GeneralType } from '../TypeDefs/General';
import { General } from '../../Entities/General';

export const GET_GENERAL = {
  type: new GraphQLList(GeneralType),
  resolve() {
    return General.find({ order: { UniqueID: 'DESC' }, take: 1 });
  },
};
