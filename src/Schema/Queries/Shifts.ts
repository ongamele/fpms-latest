import { GraphQLList } from 'graphql';
import { ShiftType } from '../TypeDefs/ShiftType';
import { Shifts } from '../../Entities/Shifts';
import { Employees } from '../../Entities/Employees';

export const GET_SHIFTS = {
  type: new GraphQLList(ShiftType),
  resolve() {
    return Shifts.find({
      relations: ['attendant'],
    });
  },
};
