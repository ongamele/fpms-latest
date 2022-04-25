import { GraphQLList } from 'graphql';
import { MonthRangeType } from '../TypeDefs/MonthRangeType';
import { MonthRange } from '../../Entities/MonthRange';

export const GET_MONTH_RANGE = {
  type: new GraphQLList(MonthRangeType),
  resolve() {
    return MonthRange.find();
  },
};
