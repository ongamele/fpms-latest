import { GraphQLList } from 'graphql';
import { StatisticsType } from '../TypeDefs/Statistics';
import { Statistics } from '../../Entities/Statistics';

export const GET_JOURNAL = {
  type: new GraphQLList(StatisticsType),
  resolve() {
    return Statistics.find({ order: { UniqueID: 'DESC' }, take: 50 });
  },
};
