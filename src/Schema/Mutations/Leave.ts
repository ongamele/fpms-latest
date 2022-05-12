import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { LeaveType } from '../TypeDefs/LeaveType';
import { Leaves } from '../../Entities/Leaves';

export const CREATE_LEAVE = {
  type: LeaveType,
  args: {
    EmployeeID: { type: GraphQLString },
    Date: { type: GraphQLString },
    ShiftID: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { EmployeeID, Date, ShiftID } = args;

    const existLeave = await Leaves.find({
      where: { ShiftID: ShiftID },
    });

    if (existLeave.length == 0) {
      console.log('No shift found');
      const leave = await Leaves.insert({
        EmployeeID,
        Date,
        ShiftID,
      });

      return leave;
    } else {
      console.log('Shift Already Exists!');
      return null;
    }
  },
};
