import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { ShiftType } from '../TypeDefs/ShiftType';
import { Shifts } from '../../Entities/Shifts';

export const CREATE_ATTENDANT_SHIFTS = {
  type: ShiftType,
  args: {
    AttendantID: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { AttendantID } = args;
    const shift = await Shifts.insert({
      AttendantID,
    });
    return shift;
  },
};
