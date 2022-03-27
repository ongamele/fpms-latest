import { GraphQLList } from 'graphql';
import { ShiftType } from '../TypeDefs/ShiftType';
import { Shifts } from '../../Entities/Shifts';
import { Attendants } from '../../Entities/Attendants';

export const GET_SHIFTS = {
  type: new GraphQLList(ShiftType),
  resolve() {
    return Shifts.find({
      relations: ['attendant'],
    });
  },
};
