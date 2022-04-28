import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { GET_ALL_STATISTICS } from './Queries/Statistics';
import { GET_JOURNAL } from './Queries/Journal';
import { GET_ALL_CONSTANTS } from './Queries/Constants';
import { GET_PUMP_5 } from './Queries/Pump5';
import { GET_PA1 } from './Queries/PA1';
import { GET_PA2 } from './Queries/PA2';
import { GET_PA3 } from './Queries/PA3';
import { GET_PA4 } from './Queries/PA4';
import { GET_PA5 } from './Queries/PA5';
import { GET_PA6 } from './Queries/PA6';
import { GET_PA7 } from './Queries/PA7';
import { GET_PA8 } from './Queries/PA8';
import { GET_PA9 } from './Queries/PA9';
import { GET_PA10 } from './Queries/PA10';
import { GET_PA11 } from './Queries/PA11';
import { GET_PA12 } from './Queries/PA12';
import { GET_PA13 } from './Queries/PA13';
import { GET_PA14 } from './Queries/PA14';
import { GET_PA15 } from './Queries/PA15';
import { GET_GENERAL } from './Queries/General';
import { GET_ATTENDANT1 } from './TimetableQueries/Attendant1';
import { GET_ATTENDANT2 } from './TimetableQueries/Attendant1';
import { GET_ATTENDANT3 } from './TimetableQueries/Attendant1';
import { GET_ATTENDANT4 } from './TimetableQueries/Attendant1';
import { GET_ATTENDANT5 } from './TimetableQueries/Attendant1';
import { GET_ATTENDANT6 } from './TimetableQueries/Attendant1';
import { GET_ATTENDANT7 } from './TimetableQueries/Attendant1';
import { GET_ATTENDANT8 } from './TimetableQueries/Attendant1';
import { GET_ATTENDANT9 } from './TimetableQueries/Attendant1';
import { GET_ATTENDANT10 } from './TimetableQueries/Attendant1';
import { GET_ATTENDANT11 } from './TimetableQueries/Attendant1';
import { GET_ATTENDANT12 } from './TimetableQueries/Attendant1';
import { GET_ATTENDANT13 } from './TimetableQueries/Attendant1';
import { GET_ATTENDANT14 } from './TimetableQueries/Attendant1';
import { GET_ATTENDANT15 } from './TimetableQueries/Attendant1';
import { GET_ATTENDANT16 } from './TimetableQueries/Attendant1';
import { UPDATE_EMPLOYEE_START } from './Mutations/Employees';
import { UPDATE_EMPLOYEE_END } from './Mutations/Employees';
import { UPDATE_EMPLOYEE_PUMPS } from './Mutations/Employees';
import { UPDATE_ATTENDANT_DAY } from './TimetableMutations/Attendant1';
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
import { UPDATE_DATE } from './Mutations/Shifts';
import { CLEAR_TIMETABLE } from './Mutations/Shifts';
//import { LOGIN } from './Mutations/Attendants';
import { GET_SHIFTS } from './Queries/Shifts';
import { GET_EMPLOYEES } from './Queries/Employees';
import { GET_MONTH_RANGE } from './Queries/MonthRange';
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getAllStatistics: GET_ALL_STATISTICS,
    getJournal: GET_JOURNAL,
    getAllConstants: GET_ALL_CONSTANTS,
    getPump5: GET_PUMP_5,
    getPA1: GET_PA1,
    getPA2: GET_PA2,
    getPA3: GET_PA3,
    getPA4: GET_PA4,
    getPA5: GET_PA5,
    getPA6: GET_PA6,
    getPA7: GET_PA7,
    getPA8: GET_PA8,
    getPA9: GET_PA9,
    getPA10: GET_PA10,
    getPA11: GET_PA11,
    getPA12: GET_PA12,
    getPA13: GET_PA13,
    getPA14: GET_PA14,
    getPA15: GET_PA15,
    getGeneral: GET_GENERAL,
    getAttendant1: GET_ATTENDANT1,
    getAttendant2: GET_ATTENDANT2,
    getAttendant3: GET_ATTENDANT3,
    getAttendant4: GET_ATTENDANT4,
    getAttendant5: GET_ATTENDANT5,
    getAttendant6: GET_ATTENDANT6,
    getAttendant7: GET_ATTENDANT7,
    getAttendant8: GET_ATTENDANT8,
    getAttendant9: GET_ATTENDANT9,
    getAttendant10: GET_ATTENDANT10,
    getAttendant11: GET_ATTENDANT11,
    getAttendant12: GET_ATTENDANT12,
    getAttendant13: GET_ATTENDANT13,
    getAttendant14: GET_ATTENDANT14,
    getAttendant15: GET_ATTENDANT15,
    getAttendant16: GET_ATTENDANT16,
    getEmployees: GET_EMPLOYEES,
    getShifts: GET_SHIFTS,
    getEmployeeTimetableDetails: GET_EMPLOYEE_TIMETABLE_DETAILS,
    getMonthRange: GET_MONTH_RANGE,
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
    //login: LOGIN,
    updateAttendantDay: UPDATE_ATTENDANT_DAY,
    clearTimetable: CLEAR_TIMETABLE,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
