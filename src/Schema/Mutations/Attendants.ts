import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { AttendantType } from '../TypeDefs/AttendantType';
import { Attendants } from '../../Entities/Attendants';

export const CREATE_ATTENDANT = {
  type: AttendantType,
  args: {
    ID: { type: GraphQLString },
    FirstName: { type: GraphQLString },
    LastName: { type: GraphQLString },
    EmployeeNumber: { type: GraphQLString },
    DateOfBirth: { type: GraphQLString },
    Position: { type: GraphQLString },
    DateOfEmployment: { type: GraphQLString },
    Password: { type: GraphQLString },
    SecurityQuestion: { type: GraphQLString },
    Photo: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const {
      ID,
      FirstName,
      LastName,
      EmployeeNumber,
      DateOfBirth,
      Position,
      DateOfEmployment,
      Password,
      SecurityQuestion,
      Photo,
    } = args;
    const attendant = await Attendants.insert({
      ID,
      FirstName,
      LastName,
      EmployeeNumber,
      DateOfBirth,
      Position,
      DateOfEmployment,
      Password,
      SecurityQuestion,
      Photo,
    });
    return attendant;
  },
};

export const LOGIN = {
  type: AttendantType,
  args: {
    TagID: { type: GraphQLString },
    Password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { TagID, Password } = args;

    const attendant = await Attendants.findOne({
      ID: TagID,
      Password: Password,
    });

    if (!attendant) {
      throw new Error('SHIFT DOESNT EXIST');
    }
    return attendant;
  },
};
