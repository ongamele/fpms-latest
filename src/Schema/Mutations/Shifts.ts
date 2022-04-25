import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { ShiftType } from '../TypeDefs/ShiftType';
import { Shifts } from '../../Entities/Shifts';

export const CREATE_SHIFTS = {
  type: ShiftType,
  args: {
    EmployeeID: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { EmployeeID } = args;
    for (var i = 31; i >= 1; i--) {
      await Shifts.insert({
        EmployeeID,
        Shift_number: i,
      });
    }

    return Shifts.find();
  },
};

export const UPDATE_DATE = {
  type: ShiftType,
  args: {
    MonthStart: { type: GraphQLString },
    MonthEnd: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { MonthStart, MonthEnd } = args;

    var mStart = new Date(MonthStart);
    var mEnd = new Date(MonthEnd);
    var Shift_number = 1;
    // loop for every day
    for (
      var dayDate = mStart;
      dayDate <= mEnd;
      dayDate.setDate(dayDate.getDate() + 1)
    ) {
      const date = dayDate.toISOString().substr(0, 10);
      await Shifts.update({ Shift_number: Shift_number }, { Date: date });
      Shift_number = Shift_number + 1;
    }
    return { successful: true, message: 'SHIFT UPDATED' };
  },
};
