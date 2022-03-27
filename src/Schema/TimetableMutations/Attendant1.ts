import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { Timetable } from '../TypeDefs/Timetable';
import { Attendant1 } from '../../ShiftsEntities/Attendant1';
import { Attendant2 } from '../../ShiftsEntities/Attendant2';
import { Attendant3 } from '../../ShiftsEntities/Attendant3';
import { Attendant4 } from '../../ShiftsEntities/Attendant4';
import { Attendant5 } from '../../ShiftsEntities/Attendant5';
import { Attendant6 } from '../../ShiftsEntities/Attendant6';
import { Attendant7 } from '../../ShiftsEntities/Attendant7';
import { Attendant8 } from '../../ShiftsEntities/Attendant8';
import { Attendant10 } from '../../ShiftsEntities/Attendant10';
import { Attendant11 } from '../../ShiftsEntities/Attendant11';
import { Attendant12 } from '../../ShiftsEntities/Attendant12';
import { Attendant13 } from '../../ShiftsEntities/Attendant13';
import { Attendant14 } from '../../ShiftsEntities/Attendant14';
import { Attendant15 } from '../../ShiftsEntities/Attendant15';
import { Attendant16 } from '../../ShiftsEntities/Attendant16';

export const UPDATE_ATTENDANT1 = {
  type: Timetable,
  args: {
    id: { type: GraphQLID },
    start: { type: GraphQLString },
    end: { type: GraphQLString },
    attendant: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, start, end, attendant } = args;
    const attendantData = await Attendant1.findOne({ ID: id });

    if (attendant == 'Sithembile') {
      await Attendant1.update(id, { Start: start, End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Thapelo') {
      await Attendant2.update(id, { Start: start, End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Lethu') {
      await Attendant3.update(id, { Start: start, End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Thulile') {
      await Attendant4.update(id, { Start: start, End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Marvellous') {
      await Attendant5.update(id, { Start: start, End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Dannick') {
      await Attendant6.update(id, { Start: start, End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Ntuthuko') {
      await Attendant7.update(id, { Start: start, End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Sabelo') {
      await Attendant8.update(id, { Start: start, End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }
    if (attendant == 'Nyiko') {
      await Attendant10.update(id, { Start: start, End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }
    if (attendant == 'Vusi') {
      await Attendant12.update(id, { Start: start, End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Sicelo') {
      await Attendant13.update(id, { Start: start, End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Thamsanqa') {
      await Attendant14.update(id, { Start: start, End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Joseph') {
      await Attendant15.update(id, { Start: start, End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }
  },
};

export const UPDATE_ATTENDANT1_PUMPS = {
  type: Timetable,
  args: {
    id: { type: GraphQLID },
    pumps: { type: GraphQLString },
    attendant: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, pumps, attendant } = args;

    /* const attendantData = await Attendant1.findOne({ ID: id });

    if (!attendantData) {
      throw new Error('SHIFT DOESNT EXIST');
    }*/

    if (attendant == 'Sithembile') {
      await Attendant1.update(id, { Pumps: pumps });
    }

    if (attendant == 'Thapelo') {
      await Attendant2.update(id, { Pumps: pumps });
    }

    if (attendant == 'Lethu') {
      await Attendant3.update(id, { Pumps: pumps });
    }

    if (attendant == 'Thulile') {
      await Attendant4.update(id, { Pumps: pumps });
    }

    if (attendant == 'Marvellous') {
      await Attendant5.update(id, { Pumps: pumps });
    }

    if (attendant == 'Dannick') {
      await Attendant6.update(id, { Pumps: pumps });
    }

    if (attendant == 'Ntuthuko') {
      await Attendant7.update(id, { Pumps: pumps });
    }

    if (attendant == 'Sabelo') {
      await Attendant8.update(id, { Pumps: pumps });
    }
    if (attendant == 'Nyiko') {
      await Attendant10.update(id, { Pumps: pumps });
    }
    if (attendant == 'Vusi') {
      await Attendant12.update(id, { Pumps: pumps });
    }

    if (attendant == 'Sicelo') {
      await Attendant13.update(id, { Pumps: pumps });
    }

    if (attendant == 'Thamsanqa') {
      await Attendant14.update(id, { Pumps: pumps });
    }

    if (attendant == 'Joseph') {
      await Attendant15.update(id, { Pumps: pumps });
    }

    return { successful: true, message: 'PUMPS UPDATED' };
  },
};

export const UPDATE_ATTENDANT_CLOCKING = {
  type: Timetable,
  args: {
    id: { type: GraphQLID },
    clockIn: { type: GraphQLString },
    clockOut: { type: GraphQLString },
    reason: { type: GraphQLString },
    code: { type: GraphQLString },
    min: { type: GraphQLString },
    tagID: { type: GraphQLString },
    attendant: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, clockIn, clockOut, reason, code, min, tagID, attendant } = args;

    if (attendant == 'Thapelo') {
      const updated_clocking = await Attendant2.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Lethu') {
      const updated_clocking = await Attendant3.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Thulile') {
      const updated_clocking = await Attendant4.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Marvellous') {
      const updated_clocking = await Attendant5.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Dannick') {
      const updated_clocking = await Attendant6.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Ntuthuko') {
      const updated_clocking = await Attendant7.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Sabelo') {
      const updated_clocking = await Attendant8.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }
    if (attendant == 'Nyiko') {
      const updated_clocking = await Attendant10.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }
    if (attendant == 'Vusi') {
      const updated_clocking = await Attendant12.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Sicelo') {
      const updated_clocking = await Attendant13.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Thamsanqa') {
      const updated_clocking = await Attendant14.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Joseph') {
      const updated_clocking = await Attendant15.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }
  },
};
