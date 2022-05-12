import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { Connection, Repository } from 'typeorm';

import { LeaveType } from '../TypeDefs/LeaveType';
import { Leaves } from '../../Entities/Leaves';

export const GET_EMPLOYEE_LEAVE = {
  type: new GraphQLList(LeaveType),
  args: {
    employeeID: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { employeeID } = args;
    const leave = await Leaves.find({
      where: { EmployeeID: employeeID },
    });

    return leave;
  },
};
