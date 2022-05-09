import { GraphQLList } from 'graphql';
import { MonthRangeType } from '../TypeDefs/MonthRangeType';
import { MonthRange } from '../../Entities/MonthRange';
import { WetstockMonthRange } from '../../Entities/WetstockMonthRange';

export const GET_MONTH_RANGE = {
  type: new GraphQLList(MonthRangeType),
  resolve() {
    return MonthRange.find();
  },
};

export const GET_WETSTOCK_MONTH_RANGE = {
  type: new GraphQLList(MonthRangeType),
  resolve() {
    return WetstockMonthRange.find();
  },
};
