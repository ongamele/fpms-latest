import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { GET_ALL_STATISTICS } from './Queries/Statistics';
import { GET_JOURNAL } from './Queries/Journal';
import { GET_ALL_CONSTANTS } from './Queries/Constants';

import { GET_GENERAL } from './Queries/General';

import { UPDATE_EMPLOYEE_START } from './Mutations/Employees';
import { UPDATE_EMPLOYEE_END } from './Mutations/Employees';
import { UPDATE_EMPLOYEE_PUMPS } from './Mutations/Employees';
import { UPDATE_EMPLOYEE_CLOCKIN } from './Mutations/Employees';
import { UPDATE_EMPLOYEE_CLOCKOUT } from './Mutations/Employees';
import { UPDATE_EMPLOYEE_REASON } from './Mutations/Employees';
import { GET_EMPLOYEE_TIMETABLE_DETAILS } from './Queries/Employees';
import { UPDATE_EMPLOYEE_ADJ } from './Mutations/Employees';
import { UPDATE_EMPLOYEE_CODE } from './Mutations/Employees';
import { UPDATE_EMPLOYEE_DUE_DATE } from './Mutations/Employees';
import { UPDATE_EMPLOYEE_MIN } from './Mutations/Employees';
import { CREATE_EMPLOYEE } from './Mutations/Employees';
import { CREATE_SHIFTS } from './Mutations/Shifts';
import { UPDATE_MONTH_RANGE } from './Mutations/MonthRange';
import { UPDATE_WETSTOCK_MONTH_RANGE } from './Mutations/MonthRange';
import { UPDATE_DATE } from './Mutations/Shifts';
import { CLEAR_TIMETABLE } from './Mutations/Shifts';
import { CREATE_PUMP } from './Mutations/Pumps';
import { CREATE_FUEL_READINGS } from './Mutations/FuelReadings';
import { GET_SHIFTS } from './Queries/Shifts';
import { GET_EMPLOYEES } from './Queries/Employees';
import { GET_MONTH_RANGE } from './Queries/MonthRange';
import { GET_WETSTOCK_MONTH_RANGE } from './Queries/MonthRange';
import { GET_PUMPS } from './Queries/Pumps';
import { UPDATE_UNLEADED_93_READINGS } from './Mutations/FuelReadings';
import { UPDATE_UNLEADED_95_READINGS } from './Mutations/FuelReadings';
import { UPDATE_DIESEL_10_READINGS } from './Mutations/FuelReadings';
import { UPDATE_WETSTOCK_DATE } from './Mutations/FuelReadings';
import { CREATE_TANK } from './Mutations/Tanks';
import { CREATE_TANK_READINGS } from './Mutations/TankReadings';
import { UPDATE_UNLEADED_93_TANK_READINGS } from './Mutations/TankReadings';
import { UPDATE_UNLEADED_95_TANK_READINGS } from './Mutations/TankReadings';
import { UPDATE_DIESEL_10_TANK_READINGS } from './Mutations/TankReadings';
import { UPDATE_TANK_DATE } from './Mutations/TankReadings';
import { GET_TANKS } from './Queries/Tanks';
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getAllStatistics: GET_ALL_STATISTICS,
    getJournal: GET_JOURNAL,
    getAllConstants: GET_ALL_CONSTANTS,
    getGeneral: GET_GENERAL,
    getEmployees: GET_EMPLOYEES,
    getShifts: GET_SHIFTS,
    getEmployeeTimetableDetails: GET_EMPLOYEE_TIMETABLE_DETAILS,
    getMonthRange: GET_MONTH_RANGE,
    getWetstockMonthRange: GET_WETSTOCK_MONTH_RANGE,
    getPumps: GET_PUMPS,
    getTanks: GET_TANKS,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateEmployeeStart: UPDATE_EMPLOYEE_START,
    updateEmployeeEnd: UPDATE_EMPLOYEE_END,
    updateEmployeePumps: UPDATE_EMPLOYEE_PUMPS,
    updateEmployeeClockIn: UPDATE_EMPLOYEE_CLOCKIN,
    updateEmployeeClockOut: UPDATE_EMPLOYEE_CLOCKOUT,
    updateEmployeeReason: UPDATE_EMPLOYEE_REASON,
    updateEmployeeAdj: UPDATE_EMPLOYEE_ADJ,
    updateEmployeeCode: UPDATE_EMPLOYEE_CODE,
    updateEmployeeDueDate: UPDATE_EMPLOYEE_DUE_DATE,
    updateEmployeeMin: UPDATE_EMPLOYEE_MIN,
    createEmployee: CREATE_EMPLOYEE,
    createShifts: CREATE_SHIFTS,
    updateMonthRange: UPDATE_MONTH_RANGE,
    updateDate: UPDATE_DATE,
    updateWetstockMonthRange: UPDATE_WETSTOCK_MONTH_RANGE,
    //login: LOGIN,
    clearTimetable: CLEAR_TIMETABLE,
    createPump: CREATE_PUMP,
    createFuelReadings: CREATE_FUEL_READINGS,
    updateUnleaded93Readings: UPDATE_UNLEADED_93_READINGS,
    updateUnleaded95Readings: UPDATE_UNLEADED_95_READINGS,
    updateDiesel10Readings: UPDATE_DIESEL_10_READINGS,
    updateWetstockDate: UPDATE_WETSTOCK_DATE,
    createTank: CREATE_TANK,
    createTankReadings: CREATE_TANK_READINGS,
    updateUnleaded93TankReadings: UPDATE_UNLEADED_93_TANK_READINGS,
    updateUnleaded95TankReadings: UPDATE_UNLEADED_95_TANK_READINGS,
    updateDiesel10TankReadings: UPDATE_DIESEL_10_TANK_READINGS,
    updateTankDate: UPDATE_TANK_DATE,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
