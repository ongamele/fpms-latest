import { GraphQLList } from 'graphql';
import { AttendantType } from '../TypeDefs/AttendantType';
import { Attendants } from '../../Entities/Attendants';

export const GET_ATTENDANTS = {
  type: new GraphQLList(AttendantType),
  resolve() {
    return Attendants.find();
  },
};
