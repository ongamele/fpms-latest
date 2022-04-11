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
import { UPDATE_ATTENDANT_START } from './TimetableMutations/Attendant1';
import { UPDATE_ATTENDANT_END } from './TimetableMutations/Attendant1';
import { UPDATE_ATTENDANT1_PUMPS } from './TimetableMutations/Attendant1';
import { UPDATE_ATTENDANT_DAY } from './TimetableMutations/Attendant1';
import { UPDATE_ATTENDANT_CLOCKIN } from './TimetableMutations/Attendant1';
import { UPDATE_ATTENDANT_CLOCKOUT } from './TimetableMutations/Attendant1';
import { UPDATE_ATTENDANT_REASON } from './TimetableMutations/Attendant1';
import { UPDATE_ATTENDANT_ADJ } from './TimetableMutations/Attendant1';
import { UPDATE_ATTENDANT_CODE } from './TimetableMutations/Attendant1';
import { UPDATE_ATTENDANT_DUE_DATE } from './TimetableMutations/Attendant1';
import { UPDATE_ATTENDANT_MIN } from './TimetableMutations/Attendant1';
import { CREATE_ATTENDANT } from './Mutations/Attendants';
import { CREATE_ATTENDANT_SHIFTS } from './Mutations/Shifts';
import { LOGIN } from './Mutations/Attendants';
import { GET_SHIFTS } from './Queries/Shifts';
import { GET_ATTENDANTS } from './Queries/Attendants';
import { GET_ATTENDANT_TIMETABLE } from './Queries/Attendants';
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
    getAttendants: GET_ATTENDANTS,
    getShifts: GET_SHIFTS,
    getAttendantTimetable: GET_ATTENDANT_TIMETABLE,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateAttendantStart: UPDATE_ATTENDANT_START,
    updateAttendantEnd: UPDATE_ATTENDANT_END,
    updateAttendant1Pumps: UPDATE_ATTENDANT1_PUMPS,
    updateAttendantClockIn: UPDATE_ATTENDANT_CLOCKIN,
    updateAttendantClockOut: UPDATE_ATTENDANT_CLOCKOUT,
    updateAttendantReason: UPDATE_ATTENDANT_REASON,
    updateAttendantAdj: UPDATE_ATTENDANT_ADJ,
    updateAttendantCode: UPDATE_ATTENDANT_CODE,
    updateAttendantDueDate: UPDATE_ATTENDANT_DUE_DATE,
    updateAttendantMin: UPDATE_ATTENDANT_MIN,
    createAttendant: CREATE_ATTENDANT,
    login: LOGIN,
    createAttendantShifts: CREATE_ATTENDANT_SHIFTS,
    updateAttendantDay: UPDATE_ATTENDANT_DAY,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
