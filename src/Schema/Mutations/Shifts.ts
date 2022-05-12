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

export const CLEAR_TIMETABLE = {
  type: ShiftType,
  args: {
    employeeID: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { employeeID } = args;

    const employeeShift = await Shifts.find({
      where: { EmployeeID: employeeID },
    });

    let start = '0';
    let end = '0';
    let clockIn = '0';
    let clockOut = '0';
    let pumps = '0';
    let dueDate = '00-00-00';
    let adj = '0';
    let code = '0';
    let min = '0';
    let pay_hrs = '0';
    let reason = '0';

    var id = 0;

    for (var i = 0; i <= employeeShift.length + 1; i++) {
      id = employeeShift[i].ID;

      await Shifts.update(id, {
        Start: start,
        End: end,
        ClockIn: clockIn,
        ClockOut: clockOut,
        Pumps: pumps,
        Due_date: dueDate,
        Adj: adj,
        Code: code,
        Min: min,
        Pay_hrs: pay_hrs,
        Reason: reason,
      });

      if (i + 1 == employeeShift.length) {
        // console.log('Not Completed');
        return { ID: id };
      }
    }
  },
};

export const DELETE_SHIFTS = {
  type: ShiftType,
  args: {
    EmployeeID: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { EmployeeID } = args;

    const employeeShift = await Shifts.find({
      where: { EmployeeID: EmployeeID },
    });

    for (var i = 0; i <= employeeShift.length + 1; i++) {
      let id = employeeShift[i].ID;

      await Shifts.delete(id);

      if (i + 1 == employeeShift.length) {
        // console.log('Not Completed');
        return { ID: id };
      }
    }
  },
};
