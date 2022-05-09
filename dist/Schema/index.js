"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const Statistics_1 = require("./Queries/Statistics");
const Journal_1 = require("./Queries/Journal");
const Constants_1 = require("./Queries/Constants");
const General_1 = require("./Queries/General");
const Employees_1 = require("./Mutations/Employees");
const Employees_2 = require("./Mutations/Employees");
const Employees_3 = require("./Mutations/Employees");
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
const MonthRange_2 = require("./Mutations/MonthRange");
const Shifts_2 = require("./Mutations/Shifts");
const Shifts_3 = require("./Mutations/Shifts");
const Pumps_1 = require("./Mutations/Pumps");
const FuelReadings_1 = require("./Mutations/FuelReadings");
const Shifts_4 = require("./Queries/Shifts");
const Employees_13 = require("./Queries/Employees");
const MonthRange_3 = require("./Queries/MonthRange");
const MonthRange_4 = require("./Queries/MonthRange");
const Pumps_2 = require("./Queries/Pumps");
const FuelReadings_2 = require("./Mutations/FuelReadings");
const FuelReadings_3 = require("./Mutations/FuelReadings");
const FuelReadings_4 = require("./Mutations/FuelReadings");
const FuelReadings_5 = require("./Mutations/FuelReadings");
const Tanks_1 = require("./Mutations/Tanks");
const TankReadings_1 = require("./Mutations/TankReadings");
const TankReadings_2 = require("./Mutations/TankReadings");
const TankReadings_3 = require("./Mutations/TankReadings");
const TankReadings_4 = require("./Mutations/TankReadings");
const TankReadings_5 = require("./Mutations/TankReadings");
const Tanks_2 = require("./Queries/Tanks");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getAllStatistics: Statistics_1.GET_ALL_STATISTICS,
        getJournal: Journal_1.GET_JOURNAL,
        getAllConstants: Constants_1.GET_ALL_CONSTANTS,
        getGeneral: General_1.GET_GENERAL,
        getEmployees: Employees_13.GET_EMPLOYEES,
        getShifts: Shifts_4.GET_SHIFTS,
        getEmployeeTimetableDetails: Employees_7.GET_EMPLOYEE_TIMETABLE_DETAILS,
        getMonthRange: MonthRange_3.GET_MONTH_RANGE,
        getWetstockMonthRange: MonthRange_4.GET_WETSTOCK_MONTH_RANGE,
        getPumps: Pumps_2.GET_PUMPS,
        getTanks: Tanks_2.GET_TANKS,
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
        updateWetstockMonthRange: MonthRange_2.UPDATE_WETSTOCK_MONTH_RANGE,
        //login: LOGIN,
        clearTimetable: Shifts_3.CLEAR_TIMETABLE,
        createPump: Pumps_1.CREATE_PUMP,
        createFuelReadings: FuelReadings_1.CREATE_FUEL_READINGS,
        updateUnleaded93Readings: FuelReadings_2.UPDATE_UNLEADED_93_READINGS,
        updateUnleaded95Readings: FuelReadings_3.UPDATE_UNLEADED_95_READINGS,
        updateDiesel10Readings: FuelReadings_4.UPDATE_DIESEL_10_READINGS,
        updateWetstockDate: FuelReadings_5.UPDATE_WETSTOCK_DATE,
        createTank: Tanks_1.CREATE_TANK,
        createTankReadings: TankReadings_1.CREATE_TANK_READINGS,
        updateUnleaded93TankReadings: TankReadings_2.UPDATE_UNLEADED_93_TANK_READINGS,
        updateUnleaded95TankReadings: TankReadings_3.UPDATE_UNLEADED_95_TANK_READINGS,
        updateDiesel10TankReadings: TankReadings_4.UPDATE_DIESEL_10_TANK_READINGS,
        updateTankDate: TankReadings_5.UPDATE_TANK_DATE,
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
