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
const Employees_13 = require("./Mutations/Employees");
const Employees_14 = require("./Mutations/Employees");
const Shifts_1 = require("./Mutations/Shifts");
const Shifts_2 = require("./Mutations/Shifts");
const MonthRange_1 = require("./Mutations/MonthRange");
const MonthRange_2 = require("./Mutations/MonthRange");
const Shifts_3 = require("./Mutations/Shifts");
const Shifts_4 = require("./Mutations/Shifts");
const Pumps_1 = require("./Mutations/Pumps");
const FuelReadings_1 = require("./Mutations/FuelReadings");
const Shifts_5 = require("./Queries/Shifts");
const Employees_15 = require("./Queries/Employees");
const MonthRange_3 = require("./Queries/MonthRange");
const MonthRange_4 = require("./Queries/MonthRange");
const Pumps_2 = require("./Queries/Pumps");
const Pumps_3 = require("./Queries/Pumps");
const Pumps_4 = require("./Mutations/Pumps");
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
const Tanks_3 = require("./Queries/Tanks");
const Tanks_4 = require("./Mutations/Tanks");
const Leave_1 = require("./Mutations/Leave");
const Leave_2 = require("./Queries/Leave");
const FuelReadings_6 = require("./Mutations/FuelReadings");
const FuelReadings_7 = require("./Mutations/FuelReadings");
const FuelReadings_8 = require("./Mutations/FuelReadings");
const TankReadings_6 = require("./Mutations/TankReadings");
const TankReadings_7 = require("./Mutations/TankReadings");
const TankReadings_8 = require("./Mutations/TankReadings");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getAllStatistics: Statistics_1.GET_ALL_STATISTICS,
        getJournal: Journal_1.GET_JOURNAL,
        getAllConstants: Constants_1.GET_ALL_CONSTANTS,
        getGeneral: General_1.GET_GENERAL,
        getEmployees: Employees_15.GET_EMPLOYEES,
        getShifts: Shifts_5.GET_SHIFTS,
        getEmployeeTimetableDetails: Employees_7.GET_EMPLOYEE_TIMETABLE_DETAILS,
        getMonthRange: MonthRange_3.GET_MONTH_RANGE,
        getWetstockMonthRange: MonthRange_4.GET_WETSTOCK_MONTH_RANGE,
        getPumps: Pumps_2.GET_PUMPS,
        getAllPumps: Pumps_3.GET_ALL_PUMPS,
        getTanks: Tanks_2.GET_TANKS,
        getAllTanks: Tanks_3.GET_ALL_TANKS,
        getEmployeeLeave: Leave_2.GET_EMPLOYEE_LEAVE,
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
        updateEmployeeTea: Employees_12.UPDATE_EMPLOYEE_TEA,
        createEmployee: Employees_13.CREATE_EMPLOYEE,
        createShifts: Shifts_1.CREATE_SHIFTS,
        updateMonthRange: MonthRange_1.UPDATE_MONTH_RANGE,
        updateDate: Shifts_3.UPDATE_DATE,
        updateWetstockMonthRange: MonthRange_2.UPDATE_WETSTOCK_MONTH_RANGE,
        //login: LOGIN,
        clearTimetable: Shifts_4.CLEAR_TIMETABLE,
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
        deleteTank: Tanks_4.DELETE_TANK,
        deleteUnleaded93Tank: TankReadings_6.DELETE_UNLEADED_93_TANK,
        deleteUnleaded95Tank: TankReadings_7.DELETE_UNLEADED_95_TANK,
        deleteDiesel10Tank: TankReadings_8.DELETE_DIESEL_10_TANK,
        deletePump: Pumps_4.DELETE_PUMP,
        deleteUnleaded93: FuelReadings_6.DELETE_UNLEADED_93,
        deleteUnleaded95: FuelReadings_7.DELETE_UNLEADED_95,
        deleteDiesel10: FuelReadings_8.DELETE_DIESEL_10,
        updateTankDate: TankReadings_5.UPDATE_TANK_DATE,
        deleteEmployee: Employees_14.DELETE_EMPLOYEE,
        deleteShifts: Shifts_2.DELETE_SHIFTS,
        createLeave: Leave_1.CREATE_LEAVE,
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
