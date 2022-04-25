import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { MonthRangeType } from '../TypeDefs/MonthRangeType';
import { MonthRange } from '../../Entities/MonthRange';

export const UPDATE_MONTH_RANGE = {
  type: MonthRangeType,
  args: {
    MonthStart: { type: GraphQLString },
    MonthEnd: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { MonthStart, MonthEnd } = args;
    const id = 1;
    const Range = await MonthRange.update(id, {
      MonthStart: MonthStart,
      MonthEnd: MonthEnd,
    });

    return Range;
  },
};
