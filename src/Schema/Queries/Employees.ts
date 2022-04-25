import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { Connection, Repository } from 'typeorm';

import { EmployeeType } from '../TypeDefs/EmployeeType';
import { ShiftType } from '../TypeDefs/ShiftType';
import { Employees } from '../../Entities/Employees';
import { Shifts } from '../../Entities/Shifts';

export const GET_EMPLOYEES = {
  type: new GraphQLList(EmployeeType),
  async resolve() {
    const employees = await Employees.find({
      relations: ['shifts'],
    });

    return employees;
  },
};

export const GET_EMPLOYEE_TIMETABLE_DETAILS = {
  type: new GraphQLList(EmployeeType),
  args: {
    employeeID: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { employeeID } = args;
    const employee = await Employees.find({
      relations: ['shifts'],
      where: { EmployeeID: employeeID },
    });

    return employee;
  },
};
