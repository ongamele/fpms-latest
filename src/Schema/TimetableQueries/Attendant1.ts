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

export const GET_ATTENDANT_TIMETABLE = {
  type: new GraphQLList(Timetable),
  args: {
    attendant: { type: GraphQLString },
  },
  resolve(parent: any, args: any) {
    const { attendant } = args;
    if (attendant == 'Sithembile') {
      return Attendant1.find({ order: { ID: 'ASC' }, take: 31 });
    }

    if (attendant == 'Thapelo') {
      return Attendant2.find({ order: { ID: 'ASC' }, take: 31 });
    }

    if (attendant == 'Lethu') {
      return Attendant3.find({ order: { ID: 'ASC' }, take: 31 });
    }

    if (attendant == 'Thulile') {
      return Attendant4.find({ order: { ID: 'ASC' }, take: 31 });
    }

    if (attendant == 'Marvellous') {
      return Attendant5.find({ order: { ID: 'ASC' }, take: 31 });
    }

    if (attendant == 'Dannick') {
      return Attendant6.find({ order: { ID: 'ASC' }, take: 31 });
    }

    if (attendant == 'Ntuthuko') {
      return Attendant7.find({ order: { ID: 'ASC' }, take: 31 });
    }

    if (attendant == 'Sabelo') {
      return Attendant8.find({ order: { ID: 'ASC' }, take: 31 });
    }
    if (attendant == 'Nyiko') {
      return Attendant10.find({ order: { ID: 'ASC' }, take: 31 });
    }
    if (attendant == 'Vusi') {
      return Attendant12.find({ order: { ID: 'ASC' }, take: 31 });
    }

    if (attendant == 'Sicelo') {
      return Attendant13.find({ order: { ID: 'ASC' }, take: 31 });
    }

    if (attendant == 'Thamsanqa') {
      return Attendant14.find({ order: { ID: 'ASC' }, take: 31 });
    }

    if (attendant == 'Joseph') {
      return Attendant15.find({ order: { ID: 'ASC' }, take: 31 });
    }
  },
};

export const GET_ATTENDANT1 = {
  type: new GraphQLList(Timetable),
  resolve() {
    return Attendant1.find({ order: { ID: 'ASC' }, take: 31 });
  },
};

export const GET_ATTENDANT2 = {
  type: new GraphQLList(Timetable),
  resolve() {
    return Attendant2.find({ order: { ID: 'ASC' }, take: 31 });
  },
};

export const GET_ATTENDANT3 = {
  type: new GraphQLList(Timetable),
  resolve() {
    return Attendant3.find({ order: { ID: 'ASC' }, take: 31 });
  },
};

export const GET_ATTENDANT4 = {
  type: new GraphQLList(Timetable),
  resolve() {
    return Attendant4.find({ order: { ID: 'ASC' }, take: 31 });
  },
};

export const GET_ATTENDANT5 = {
  type: new GraphQLList(Timetable),
  resolve() {
    return Attendant5.find({ order: { ID: 'ASC' }, take: 31 });
  },
};

export const GET_ATTENDANT6 = {
  type: new GraphQLList(Timetable),
  resolve() {
    return Attendant6.find({ order: { ID: 'ASC' }, take: 31 });
  },
};

export const GET_ATTENDANT7 = {
  type: new GraphQLList(Timetable),
  resolve() {
    return Attendant7.find({ order: { ID: 'ASC' }, take: 31 });
  },
};

export const GET_ATTENDANT8 = {
  type: new GraphQLList(Timetable),
  resolve() {
    return Attendant8.find({ order: { ID: 'ASC' }, take: 31 });
  },
};

export const GET_ATTENDANT9 = {
  type: new GraphQLList(Timetable),
  resolve() {
    return Attendant9.find({ order: { ID: 'ASC' }, take: 31 });
  },
};

export const GET_ATTENDANT10 = {
  type: new GraphQLList(Timetable),
  resolve() {
    return Attendant10.find({ order: { ID: 'ASC' }, take: 31 });
  },
};

export const GET_ATTENDANT11 = {
  type: new GraphQLList(Timetable),
  resolve() {
    return Attendant11.find({ order: { ID: 'ASC' }, take: 31 });
  },
};

export const GET_ATTENDANT12 = {
  type: new GraphQLList(Timetable),
  resolve() {
    return Attendant12.find({ order: { ID: 'ASC' }, take: 31 });
  },
};

export const GET_ATTENDANT13 = {
  type: new GraphQLList(Timetable),
  resolve() {
    return Attendant13.find({ order: { ID: 'ASC' }, take: 31 });
  },
};

export const GET_ATTENDANT14 = {
  type: new GraphQLList(Timetable),
  resolve() {
    return Attendant14.find({ order: { ID: 'ASC' }, take: 31 });
  },
};

export const GET_ATTENDANT15 = {
  type: new GraphQLList(Timetable),
  resolve() {
    return Attendant15.find({ order: { ID: 'ASC' }, take: 31 });
  },
};

export const GET_ATTENDANT16 = {
  type: new GraphQLList(Timetable),
  resolve() {
    return Attendant16.find({ order: { ID: 'ASC' }, take: 31 });
  },
};
