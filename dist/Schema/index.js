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
const Attendant1_17 = require("./TimetableMutations/Attendant1");
const Attendant1_18 = require("./TimetableMutations/Attendant1");
const Attendant1_19 = require("./TimetableMutations/Attendant1");
const Attendant1_20 = require("./TimetableMutations/Attendant1");
const Attendant1_21 = require("./TimetableMutations/Attendant1");
const Attendant1_22 = require("./TimetableMutations/Attendant1");
const Attendant1_23 = require("./TimetableMutations/Attendant1");
const Attendant1_24 = require("./TimetableQueries/Attendant1");
const Attendant1_25 = require("./TimetableMutations/Attendant1");
const Attendant1_26 = require("./TimetableMutations/Attendant1");
const Attendant1_27 = require("./TimetableMutations/Attendant1");
const Attendant1_28 = require("./TimetableMutations/Attendant1");
const Attendants_1 = require("./Mutations/Attendants");
const Shifts_1 = require("./Mutations/Shifts");
const Attendants_2 = require("./Mutations/Attendants");
const Shifts_2 = require("./Queries/Shifts");
const Attendants_3 = require("./Queries/Attendants");
const Attendants_4 = require("./Queries/Attendants");
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
        getAttendants: Attendants_3.GET_ATTENDANTS,
        getShifts: Shifts_2.GET_SHIFTS,
        getAttendantTimetable: Attendants_4.GET_ATTENDANT_TIMETABLE,
        getAttendantTimetableDetails: Attendant1_24.GET_ATTENDANT_TIMETABLE_DETAILS,
    },
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        updateAttendantStart: Attendant1_17.UPDATE_ATTENDANT_START,
        updateAttendantEnd: Attendant1_18.UPDATE_ATTENDANT_END,
        updateAttendant1Pumps: Attendant1_19.UPDATE_ATTENDANT1_PUMPS,
        updateAttendantClockIn: Attendant1_21.UPDATE_ATTENDANT_CLOCKIN,
        updateAttendantClockOut: Attendant1_22.UPDATE_ATTENDANT_CLOCKOUT,
        updateAttendantReason: Attendant1_23.UPDATE_ATTENDANT_REASON,
        updateAttendantAdj: Attendant1_25.UPDATE_ATTENDANT_ADJ,
        updateAttendantCode: Attendant1_26.UPDATE_ATTENDANT_CODE,
        updateAttendantDueDate: Attendant1_27.UPDATE_ATTENDANT_DUE_DATE,
        updateAttendantMin: Attendant1_28.UPDATE_ATTENDANT_MIN,
        createAttendant: Attendants_1.CREATE_ATTENDANT,
        login: Attendants_2.LOGIN,
        createAttendantShifts: Shifts_1.CREATE_ATTENDANT_SHIFTS,
        updateAttendantDay: Attendant1_20.UPDATE_ATTENDANT_DAY,
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
