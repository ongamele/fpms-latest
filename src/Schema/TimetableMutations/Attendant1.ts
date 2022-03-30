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
import { Attendant9 } from '../../ShiftsEntities/Attendant9';
import { Attendant10 } from '../../ShiftsEntities/Attendant10';
import { Attendant11 } from '../../ShiftsEntities/Attendant11';
import { Attendant12 } from '../../ShiftsEntities/Attendant12';
import { Attendant13 } from '../../ShiftsEntities/Attendant13';
import { Attendant14 } from '../../ShiftsEntities/Attendant14';
import { Attendant15 } from '../../ShiftsEntities/Attendant15';
import { Attendant16 } from '../../ShiftsEntities/Attendant16';

export const UPDATE_ATTENDANT_START = {
  type: Timetable,
  args: {
    id: { type: GraphQLID },
    start: { type: GraphQLString },
    attendant: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, start, attendant } = args;
    const attendantData = await Attendant1.findOne({ ID: id });

    if (attendant == 'Sithembile') {
      await Attendant1.update(id, { Start: start });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Thapelo') {
      await Attendant2.update(id, { Start: start });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Perfect') {
      await Attendant16.update(id, { Start: start });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Thulile') {
      await Attendant4.update(id, { Start: start });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'David') {
      await Attendant5.update(id, { Start: start });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Dannick') {
      await Attendant6.update(id, { Start: start });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Ntuthuko') {
      await Attendant7.update(id, { Start: start });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Sabelo') {
      await Attendant8.update(id, { Start: start });
      return { successful: true, message: 'SHIFT UPDATED' };
    }
    if (attendant == 'Nyiko') {
      await Attendant10.update(id, { Start: start });
      return { successful: true, message: 'SHIFT UPDATED' };
    }
    if (attendant == 'Vusi') {
      await Attendant12.update(id, { Start: start });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Sicelo') {
      await Attendant13.update(id, { Start: start });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Thamsanqa') {
      await Attendant14.update(id, { Start: start });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Mvuyisi') {
      await Attendant15.update(id, { Start: start });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Tawanda') {
      await Attendant3.update(id, { Start: start });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Aron') {
      await Attendant9.update(id, { Start: start });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Tshifiwa') {
      await Attendant11.update(id, { Start: start });
      return { successful: true, message: 'SHIFT UPDATED' };
    }
  },
};

export const UPDATE_ATTENDANT_END = {
  type: Timetable,
  args: {
    id: { type: GraphQLID },
    end: { type: GraphQLString },
    attendant: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, end, attendant } = args;
    const attendantData = await Attendant1.findOne({ ID: id });

    if (attendant == 'Sithembile') {
      await Attendant1.update(id, { End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Thapelo') {
      await Attendant2.update(id, { End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Perfect') {
      await Attendant16.update(id, { End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Thulile') {
      await Attendant4.update(id, { End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'David') {
      await Attendant5.update(id, { End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Dannick') {
      await Attendant6.update(id, { End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Ntuthuko') {
      await Attendant7.update(id, { End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Sabelo') {
      await Attendant8.update(id, { End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }
    if (attendant == 'Nyiko') {
      await Attendant10.update(id, { End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }
    if (attendant == 'Vusi') {
      await Attendant12.update(id, { End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Sicelo') {
      await Attendant13.update(id, { End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Thamsanqa') {
      await Attendant14.update(id, { End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Mvuyisi') {
      await Attendant15.update(id, { End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Tawanda') {
      await Attendant3.update(id, { End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Aron') {
      await Attendant9.update(id, { End: end });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Tshifiwa') {
      await Attendant11.update(id, { End: end });
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
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Thapelo') {
      await Attendant2.update(id, { Pumps: pumps });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Perfect') {
      await Attendant16.update(id, { Pumps: pumps });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Thulile') {
      await Attendant4.update(id, { Pumps: pumps });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'David') {
      await Attendant5.update(id, { Pumps: pumps });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Dannick') {
      await Attendant6.update(id, { Pumps: pumps });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Ntuthuko') {
      await Attendant7.update(id, { Pumps: pumps });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Sabelo') {
      await Attendant8.update(id, { Pumps: pumps });
      return { successful: true, message: 'SHIFT UPDATED' };
    }
    if (attendant == 'Nyiko') {
      await Attendant10.update(id, { Pumps: pumps });
      return { successful: true, message: 'SHIFT UPDATED' };
    }
    if (attendant == 'Vusi') {
      await Attendant12.update(id, { Pumps: pumps });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Sicelo') {
      await Attendant13.update(id, { Pumps: pumps });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Thamsanqa') {
      await Attendant14.update(id, { Pumps: pumps });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Mvuyisi') {
      await Attendant15.update(id, { Pumps: pumps });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Tawanda') {
      await Attendant3.update(id, { Pumps: pumps });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Aron') {
      await Attendant9.update(id, { Pumps: pumps });
      return { successful: true, message: 'SHIFT UPDATED' };
    }

    if (attendant == 'Tshifiwa') {
      await Attendant11.update(id, { Pumps: pumps });
      return { successful: true, message: 'SHIFT UPDATED' };
    }
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

    if (attendant == 'Sithembile') {
      const updated_clocking = Attendant1.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Thapelo') {
      const updated_clocking = Attendant2.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Perfect') {
      const updated_clocking = Attendant16.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Thulile') {
      const updated_clocking = Attendant4.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'David') {
      const updated_clocking = Attendant5.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Dannick') {
      const updated_clocking = Attendant6.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Ntuthuko') {
      const updated_clocking = Attendant7.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Sabelo') {
      const updated_clocking = Attendant8.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }
    if (attendant == 'Nyiko') {
      const updated_clocking = Attendant10.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Aron') {
      const updated_clocking = Attendant9.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Tshifiwa') {
      const updated_clocking = Attendant11.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Vusi') {
      const updated_clocking = Attendant12.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Sicelo') {
      const updated_clocking = Attendant13.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Thamsanqa') {
      const updated_clocking = Attendant14.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Mvuyisi') {
      const updated_clocking = Attendant15.update(id, {
        ClockIn: clockIn,
        ClockOut: clockOut,
        Reason: reason,
        Code: code,
        Min: min,
      });

      return updated_clocking;
    }

    if (attendant == 'Tawanda') {
      const updated_clocking = Attendant3.update(id, {
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

export const UPDATE_ATTENDANT_DAY = {
  type: Timetable,
  args: {
    id: { type: GraphQLID },
    day: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, day } = args;

    await Attendant1.update(id, { Days: day });

    await Attendant2.update(id, { Days: day });

    await Attendant16.update(id, { Days: day });

    await Attendant4.update(id, { Days: day });

    await Attendant5.update(id, { Days: day });

    await Attendant6.update(id, { Days: day });

    await Attendant7.update(id, { Days: day });

    await Attendant8.update(id, { Days: day });

    await Attendant10.update(id, { Days: day });

    await Attendant12.update(id, { Days: day });

    await Attendant13.update(id, { Days: day });

    await Attendant14.update(id, { Days: day });

    await Attendant15.update(id, { Days: day });

    await Attendant3.update(id, { Days: day });

    await Attendant9.update(id, { Days: day });

    await Attendant11.update(id, { Days: day });

    return { successful: true, message: 'DAY UPDATED' };
  },
};
