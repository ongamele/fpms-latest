import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { AttendantType } from '../TypeDefs/AttendantType';
import { Attendants } from '../../Entities/Attendants';
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

export const GET_ATTENDANTS = {
  type: new GraphQLList(AttendantType),
  resolve() {
    return Attendants.find();
  },
};

export const GET_ATTENDANT_TIMETABLE = {
  type: AttendantType,
  args: {
    tagID: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { tagID } = args;

    const attendant = await Attendants.findOne({
      ID: tagID,
    });

    var attData = {};

    if (attendant?.FirstName == 'Sithembile') {
      const allShifts = await Attendant1.find({
        order: { ID: 'ASC' },
        take: 31,
      });
      const shifts = [];
      for (var i = 0; i < allShifts.length; i++) {
        shifts.push(allShifts[i]);
      }
      attData = {
        ID: attendant.ID,
        FirstName: attendant.FirstName,
        LastName: attendant.LastName,
        EmployeeNumber: attendant.EmployeeNumber,
        DateOfBirth: attendant.DateOfBirth,
        Position: attendant.Position,
        DateOfEmployment: attendant.DateOfEmployment,
        Photo: attendant.Photo,
        Shifts: shifts,
      };

      return attData;
    }

    if (attendant?.FirstName == 'Thapelo') {
      const allShifts = await Attendant2.find({
        order: { ID: 'ASC' },
        take: 31,
      });

      const shifts = [];
      for (var i = 0; i < shifts.length; i++) {
        shifts.push(allShifts[i]);
      }
      attData = {
        ID: attendant.ID,
        FirstName: attendant.FirstName,
        LastName: attendant.LastName,
        EmployeeNumber: attendant.EmployeeNumber,
        DateOfBirth: attendant.DateOfBirth,
        Position: attendant.Position,
        DateOfEmployemtn: attendant.DateOfEmployment,
        Photo: attendant.Photo,
        Shifts: shifts,
      };
      return attData;
    }

    if (attendant?.FirstName == 'Tawanda') {
      const allShifts = await Attendant3.find({
        order: { ID: 'ASC' },
        take: 31,
      });

      const shifts = [];
      for (var i = 0; i < shifts.length; i++) {
        shifts.push(allShifts[i]);
      }
      attData = {
        ID: attendant.ID,
        FirstName: attendant.FirstName,
        LastName: attendant.LastName,
        EmployeeNumber: attendant.EmployeeNumber,
        DateOfBirth: attendant.DateOfBirth,
        Position: attendant.Position,
        DateOfEmployemtn: attendant.DateOfEmployment,
        Photo: attendant.Photo,
        Shifts: shifts,
      };
      return attData;
    }

    if (attendant?.FirstName == 'Thulile') {
      const allShifts = await Attendant4.find({
        order: { ID: 'ASC' },
        take: 31,
      });

      const shifts = [];
      for (var i = 0; i < shifts.length; i++) {
        shifts.push(allShifts[i]);
      }
      attData = {
        ID: attendant.ID,
        FirstName: attendant.FirstName,
        LastName: attendant.LastName,
        EmployeeNumber: attendant.EmployeeNumber,
        DateOfBirth: attendant.DateOfBirth,
        Position: attendant.Position,
        DateOfEmployemtn: attendant.DateOfEmployment,
        Photo: attendant.Photo,
        Shifts: shifts,
      };
      return attData;
    }

    if (attendant?.FirstName == 'David') {
      const allShifts = await Attendant5.find({
        order: { ID: 'ASC' },
        take: 31,
      });

      const shifts = [];
      for (var i = 0; i < shifts.length; i++) {
        shifts.push(allShifts[i]);
      }
      attData = {
        ID: attendant.ID,
        FirstName: attendant.FirstName,
        LastName: attendant.LastName,
        EmployeeNumber: attendant.EmployeeNumber,
        DateOfBirth: attendant.DateOfBirth,
        Position: attendant.Position,
        DateOfEmployemtn: attendant.DateOfEmployment,
        Photo: attendant.Photo,
        Shifts: shifts,
      };
      return attData;
    }

    if (attendant?.FirstName == 'Dannick') {
      const allShifts = await Attendant6.find({
        order: { ID: 'ASC' },
        take: 31,
      });

      const shifts = [];
      for (var i = 0; i < shifts.length; i++) {
        shifts.push(allShifts[i]);
      }
      attData = {
        ID: attendant.ID,
        FirstName: attendant.FirstName,
        LastName: attendant.LastName,
        EmployeeNumber: attendant.EmployeeNumber,
        DateOfBirth: attendant.DateOfBirth,
        Position: attendant.Position,
        DateOfEmployemtn: attendant.DateOfEmployment,
        Photo: attendant.Photo,
        Shifts: shifts,
      };
      return attData;
    }

    if (attendant?.FirstName == 'Ntuthuko') {
      const allShifts = await Attendant7.find({
        order: { ID: 'ASC' },
        take: 31,
      });

      const shifts = [];
      for (var i = 0; i < shifts.length; i++) {
        shifts.push(allShifts[i]);
      }
      attData = {
        ID: attendant.ID,
        FirstName: attendant.FirstName,
        LastName: attendant.LastName,
        EmployeeNumber: attendant.EmployeeNumber,
        DateOfBirth: attendant.DateOfBirth,
        Position: attendant.Position,
        DateOfEmployemtn: attendant.DateOfEmployment,
        Photo: attendant.Photo,
        Shifts: shifts,
      };
      return attData;
    }

    if (attendant?.FirstName == 'Sabelo') {
      const allShifts = await Attendant8.find({
        order: { ID: 'ASC' },
        take: 31,
      });

      const shifts = [];
      for (var i = 0; i < shifts.length; i++) {
        shifts.push(allShifts[i]);
      }
      attData = {
        ID: attendant.ID,
        FirstName: attendant.FirstName,
        LastName: attendant.LastName,
        EmployeeNumber: attendant.EmployeeNumber,
        DateOfBirth: attendant.DateOfBirth,
        Position: attendant.Position,
        DateOfEmployemtn: attendant.DateOfEmployment,
        Photo: attendant.Photo,
        Shifts: shifts,
      };
      return attData;
    }

    if (attendant?.FirstName == 'Aron') {
      const allShifts = await Attendant9.find({
        order: { ID: 'ASC' },
        take: 31,
      });

      const shifts = [];
      for (var i = 0; i < shifts.length; i++) {
        shifts.push(allShifts[i]);
      }
      attData = {
        ID: attendant.ID,
        FirstName: attendant.FirstName,
        LastName: attendant.LastName,
        EmployeeNumber: attendant.EmployeeNumber,
        DateOfBirth: attendant.DateOfBirth,
        Position: attendant.Position,
        DateOfEmployemtn: attendant.DateOfEmployment,
        Photo: attendant.Photo,
        Shifts: shifts,
      };
      return attData;
    }

    if (attendant?.FirstName == 'Nyiko') {
      const allShifts = await Attendant10.find({
        order: { ID: 'ASC' },
        take: 31,
      });

      const shifts = [];
      for (var i = 0; i < shifts.length; i++) {
        shifts.push(allShifts[i]);
      }
      attData = {
        ID: attendant.ID,
        FirstName: attendant.FirstName,
        LastName: attendant.LastName,
        EmployeeNumber: attendant.EmployeeNumber,
        DateOfBirth: attendant.DateOfBirth,
        Position: attendant.Position,
        DateOfEmployemtn: attendant.DateOfEmployment,
        Photo: attendant.Photo,
        Shifts: shifts,
      };
      return attData;
    }

    if (attendant?.FirstName == 'Tshifiwa') {
      const allShifts = await Attendant11.find({
        order: { ID: 'ASC' },
        take: 31,
      });

      const shifts = [];
      for (var i = 0; i < shifts.length; i++) {
        shifts.push(allShifts[i]);
      }
      attData = {
        ID: attendant.ID,
        FirstName: attendant.FirstName,
        LastName: attendant.LastName,
        EmployeeNumber: attendant.EmployeeNumber,
        DateOfBirth: attendant.DateOfBirth,
        Position: attendant.Position,
        DateOfEmployemtn: attendant.DateOfEmployment,
        Photo: attendant.Photo,
        Shifts: shifts,
      };
      return attData;
    }

    if (attendant?.FirstName == 'Visi') {
      const allShifts = await Attendant12.find({
        order: { ID: 'ASC' },
        take: 31,
      });

      const shifts = [];
      for (var i = 0; i < shifts.length; i++) {
        shifts.push(allShifts[i]);
      }
      attData = {
        ID: attendant.ID,
        FirstName: attendant.FirstName,
        LastName: attendant.LastName,
        EmployeeNumber: attendant.EmployeeNumber,
        DateOfBirth: attendant.DateOfBirth,
        Position: attendant.Position,
        DateOfEmployemtn: attendant.DateOfEmployment,
        Photo: attendant.Photo,
        Shifts: shifts,
      };

      return attData;
    }

    if (attendant?.FirstName == 'Sicelo') {
      const allShifts = await Attendant13.find({
        order: { ID: 'ASC' },
        take: 31,
      });

      const shifts = [];
      for (var i = 0; i < shifts.length; i++) {
        shifts.push(allShifts[i]);
      }
      attData = {
        ID: attendant.ID,
        FirstName: attendant.FirstName,
        LastName: attendant.LastName,
        EmployeeNumber: attendant.EmployeeNumber,
        DateOfBirth: attendant.DateOfBirth,
        Position: attendant.Position,
        DateOfEmployemtn: attendant.DateOfEmployment,
        Photo: attendant.Photo,
        Shifts: shifts,
      };
      return attData;
    }

    if (attendant?.FirstName == 'Thamsanqa') {
      const allShifts = await Attendant14.find({
        order: { ID: 'ASC' },
        take: 31,
      });

      const shifts = [];
      for (var i = 0; i < shifts.length; i++) {
        shifts.push(allShifts[i]);
      }
      attData = {
        ID: attendant.ID,
        FirstName: attendant.FirstName,
        LastName: attendant.LastName,
        EmployeeNumber: attendant.EmployeeNumber,
        DateOfBirth: attendant.DateOfBirth,
        Position: attendant.Position,
        DateOfEmployemtn: attendant.DateOfEmployment,
        Photo: attendant.Photo,
        Shifts: shifts,
      };
      return attData;
    }

    if (attendant?.FirstName == 'Mvuyisi') {
      const allShifts = await Attendant15.find({
        order: { ID: 'ASC' },
        take: 31,
      });

      const shifts = [];
      for (var i = 0; i < shifts.length; i++) {
        shifts.push(allShifts[i]);
      }
      attData = {
        ID: attendant.ID,
        FirstName: attendant.FirstName,
        LastName: attendant.LastName,
        EmployeeNumber: attendant.EmployeeNumber,
        DateOfBirth: attendant.DateOfBirth,
        Position: attendant.Position,
        DateOfEmployemtn: attendant.DateOfEmployment,
        Photo: attendant.Photo,
        Shifts: shifts,
      };
      return attData;
    }

    if (attendant?.FirstName == 'Perfect]') {
      const allShifts = await Attendant16.find({
        order: { ID: 'ASC' },
        take: 31,
      });

      const shifts = [];
      for (var i = 0; i < shifts.length; i++) {
        shifts.push(allShifts[i]);
      }
      attData = {
        ID: attendant.ID,
        FirstName: attendant.FirstName,
        LastName: attendant.LastName,
        EmployeeNumber: attendant.EmployeeNumber,
        DateOfBirth: attendant.DateOfBirth,
        Position: attendant.Position,
        DateOfEmployemtn: attendant.DateOfEmployment,
        Photo: attendant.Photo,
        Shifts: shifts,
      };
      return attData;
    }

    if (!attendant) {
      throw new Error('SHIFT DOESNT EXIST');
    }
  },
};
