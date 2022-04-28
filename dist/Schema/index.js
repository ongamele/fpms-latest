"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const Statistics_1 = require("./Queries/Statistics");
const Journal_1 = require("./Queries/Journal");
const Constants_1 = require("./Queries/Constants");
const Pump5_1 = require("./Queries/Pump5");
const PA1_1 = require("./Queries/PA1");
const PA2_1 = require("./Queries/PA2");
const PA3_1 = require("./Queries/PA3");
const PA4_1 = require("./Queries/PA4");
const PA5_1 = require("./Queries/PA5");
const PA6_1 = require("./Queries/PA6");
const PA7_1 = require("./Queries/PA7");
const PA8_1 = require("./Queries/PA8");
const PA9_1 = require("./Queries/PA9");
const PA10_1 = require("./Queries/PA10");
const PA11_1 = require("./Queries/PA11");
const PA12_1 = require("./Queries/PA12");
const PA13_1 = require("./Queries/PA13");
const PA14_1 = require("./Queries/PA14");
const PA15_1 = require("./Queries/PA15");
const General_1 = require("./Queries/General");
const Attendant1_1 = require("./TimetableQueries/Attendant1");
const Attendant1_2 = require("./TimetableQueries/Attendant1");
const Attendant1_3 = require("./TimetableQueries/Attendant1");
const Attendant1_4 = require("./TimetableQueries/Attendant1");
const Attendant1_5 = require("./TimetableQueries/Attendant1");
const Attendant1_6 = require("./TimetableQueries/Attendant1");
const Attendant1_7 = require("./TimetableQueries/Attendant1");
const Attendant1_8 = require("./TimetableQueries/Attendant1");
const Attendant1_9 = require("./TimetableQueries/Attendant1");
const Attendant1_10 = require("./TimetableQueries/Attendant1");
const Attendant1_11 = require("./TimetableQueries/Attendant1");
const Attendant1_12 = require("./TimetableQueries/Attendant1");
const Attendant1_13 = require("./TimetableQueries/Attendant1");
const Attendant1_14 = require("./TimetableQueries/Attendant1");
const Attendant1_15 = require("./TimetableQueries/Attendant1");
const Attendant1_16 = require("./TimetableQueries/Attendant1");
const Employees_1 = require("./Mutations/Employees");
const Employees_2 = require("./Mutations/Employees");
const Employees_3 = require("./Mutations/Employees");
const Attendant1_17 = require("./TimetableMutations/Attendant1");
const Employees_4 = require("./Mutations/Employees");
const Employees_5 = require("./Mutations/Employees");
const Employees_6 = require("./Mutations/Employees");
const Employees_7 = require("./Queries/Employees");
const Employees_8 = require("./Mutations/Employees");
const Employees_9 = require("./Mutations/Employees");
const Employees_10 = require("./Mutations/Employees");
const Employees_11 = require("./Mutations/Employees");
const Employees_12 = require("./Mutations/Employees");
const Shifts_1 = require("./Mutations/Shifts");
const MonthRange_1 = require("./Mutations/MonthRange");
const Shifts_2 = require("./Mutations/Shifts");
const Shifts_3 = require("./Mutations/Shifts");
//import { LOGIN } from './Mutations/Attendants';
const Shifts_4 = require("./Queries/Shifts");
const Employees_13 = require("./Queries/Employees");
const MonthRange_2 = require("./Queries/MonthRange");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getAllStatistics: Statistics_1.GET_ALL_STATISTICS,
        getJournal: Journal_1.GET_JOURNAL,
        getAllConstants: Constants_1.GET_ALL_CONSTANTS,
        getPump5: Pump5_1.GET_PUMP_5,
        getPA1: PA1_1.GET_PA1,
        getPA2: PA2_1.GET_PA2,
        getPA3: PA3_1.GET_PA3,
        getPA4: PA4_1.GET_PA4,
        getPA5: PA5_1.GET_PA5,
        getPA6: PA6_1.GET_PA6,
        getPA7: PA7_1.GET_PA7,
        getPA8: PA8_1.GET_PA8,
        getPA9: PA9_1.GET_PA9,
        getPA10: PA10_1.GET_PA10,
        getPA11: PA11_1.GET_PA11,
        getPA12: PA12_1.GET_PA12,
        getPA13: PA13_1.GET_PA13,
        getPA14: PA14_1.GET_PA14,
        getPA15: PA15_1.GET_PA15,
        getGeneral: General_1.GET_GENERAL,
        getAttendant1: Attendant1_1.GET_ATTENDANT1,
        getAttendant2: Attendant1_2.GET_ATTENDANT2,
        getAttendant3: Attendant1_3.GET_ATTENDANT3,
        getAttendant4: Attendant1_4.GET_ATTENDANT4,
        getAttendant5: Attendant1_5.GET_ATTENDANT5,
        getAttendant6: Attendant1_6.GET_ATTENDANT6,
        getAttendant7: Attendant1_7.GET_ATTENDANT7,
        getAttendant8: Attendant1_8.GET_ATTENDANT8,
        getAttendant9: Attendant1_9.GET_ATTENDANT9,
        getAttendant10: Attendant1_10.GET_ATTENDANT10,
        getAttendant11: Attendant1_11.GET_ATTENDANT11,
        getAttendant12: Attendant1_12.GET_ATTENDANT12,
        getAttendant13: Attendant1_13.GET_ATTENDANT13,
        getAttendant14: Attendant1_14.GET_ATTENDANT14,
        getAttendant15: Attendant1_15.GET_ATTENDANT15,
        getAttendant16: Attendant1_16.GET_ATTENDANT16,
        getEmployees: Employees_13.GET_EMPLOYEES,
        getShifts: Shifts_4.GET_SHIFTS,
        getEmployeeTimetableDetails: Employees_7.GET_EMPLOYEE_TIMETABLE_DETAILS,
        getMonthRange: MonthRange_2.GET_MONTH_RANGE,
    },
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        updateEmployeeStart: Employees_1.UPDATE_EMPLOYEE_START,
        updateEmployeeEnd: Employees_2.UPDATE_EMPLOYEE_END,
        updateEmployeePumps: Employees_3.UPDATE_EMPLOYEE_PUMPS,
        updateEmployeeClockIn: Employees_4.UPDATE_EMPLOYEE_CLOCKIN,
        updateEmployeeClockOut: Employees_5.UPDATE_EMPLOYEE_CLOCKOUT,
        updateEmployeeReason: Employees_6.UPDATE_EMPLOYEE_REASON,
        updateEmployeeAdj: Employees_8.UPDATE_EMPLOYEE_ADJ,
        updateEmployeeCode: Employees_9.UPDATE_EMPLOYEE_CODE,
        updateEmployeeDueDate: Employees_10.UPDATE_EMPLOYEE_DUE_DATE,
        updateEmployeeMin: Employees_11.UPDATE_EMPLOYEE_MIN,
        createEmployee: Employees_12.CREATE_EMPLOYEE,
        createShifts: Shifts_1.CREATE_SHIFTS,
        updateMonthRange: MonthRange_1.UPDATE_MONTH_RANGE,
        updateDate: Shifts_2.UPDATE_DATE,
        //login: LOGIN,
        updateAttendantDay: Attendant1_17.UPDATE_ATTENDANT_DAY,
        clearTimetable: Shifts_3.CLEAR_TIMETABLE,
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
