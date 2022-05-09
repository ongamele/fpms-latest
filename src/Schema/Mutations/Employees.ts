import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { EmployeeType } from '../TypeDefs/EmployeeType';
import { ShiftType } from '../TypeDefs/ShiftType';
import { Timetable } from '../TypeDefs/Timetable';
import { Employees } from '../../Entities/Employees';
import { Shifts } from '../../Entities/Shifts';

export const CREATE_EMPLOYEE = {
  type: EmployeeType,
  args: {
    FirstName: { type: GraphQLString },
    LastName: { type: GraphQLString },
    EmployeeID: { type: GraphQLInt },
    IdNumber: { type: GraphQLString },
    CellNumber: { type: GraphQLString },
    Gender: { type: GraphQLString },
    Position: { type: GraphQLString },
    DateOfEmployment: { type: GraphQLString },
    Password: { type: GraphQLString },
    SecurityQuestion: { type: GraphQLString },
    Answer: { type: GraphQLString },
    Photo: { type: GraphQLString },
    ShoeSize: { type: GraphQLInt },
    TShirtSize: { type: GraphQLString },
    JacketSize: { type: GraphQLString },
    PantsSize: { type: GraphQLInt },
    Bank: { type: GraphQLString },
    AccountNumber: { type: GraphQLInt },
    AccountType: { type: GraphQLString },
    BranchCode: { type: GraphQLString },
    StreetNumber: { type: GraphQLString },
    StreetName: { type: GraphQLString },
    Suburb: { type: GraphQLString },
    City: { type: GraphQLString },
    Code: { type: GraphQLString },
    TaxNumber: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const {
      FirstName,
      LastName,
      EmployeeID,
      IdNumber,
      CellNumber,
      Gender,
      Position,
      DateOfEmployment,
      Password,
      SecurityQuestion,
      Photo,
      Answer,
      ShoeSize,
      TShirtSize,
      JacketSize,
      PantsSize,
      Bank,
      AccountNumber,
      AccountType,
      BranchCode,
      StreetNumber,
      StreetName,
      Suburb,
      City,
      Code,
      TaxNumber,
    } = args;
    const attendant = await Employees.insert({
      FirstName,
      LastName,
      EmployeeID,
      CellNumber,
      IdNumber,
      Gender,
      Position,
      DateOfEmployment,
      Password,
      SecurityQuestion,
      Photo,
      Answer,
      ShoeSize,
      TShirtSize,
      JacketSize,
      PantsSize,
      Bank,
      AccountNumber,
      AccountType,
      BranchCode,
      StreetNumber,
      StreetName,
      Suburb,
      City,
      Code,
      TaxNumber,
    });
    return attendant;
  },
};

export const UPDATE_EMPLOYEE_START = {
  type: Timetable,
  args: {
    id: { type: GraphQLID },
    start: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, start } = args;

    const shift = await Shifts.update(id, { Start: start });
    return shift;
  },
};

export const UPDATE_EMPLOYEE_END = {
  type: Timetable,
  args: {
    id: { type: GraphQLID },
    end: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, end } = args;

    const shift = await Shifts.update(id, { End: end });
    return shift;
  },
};

export const UPDATE_EMPLOYEE_PUMPS = {
  type: Timetable,
  args: {
    id: { type: GraphQLID },
    pumps: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, pumps } = args;

    await Shifts.update(id, { Pumps: pumps });
    return { successful: true, message: 'SHIFT UPDATED' };
  },
};

export const UPDATE_EMPLOYEE_CLOCKIN = {
  type: Timetable,
  args: {
    id: { type: GraphQLID },
    clockIn: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, clockIn } = args;

    await Shifts.update(id, { ClockIn: clockIn });
    return { successful: true, message: 'SHIFT UPDATED' };
  },
};

export const UPDATE_EMPLOYEE_CLOCKOUT = {
  type: Timetable,
  args: {
    id: { type: GraphQLID },
    clockOut: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, clockOut } = args;

    await Shifts.update(id, { ClockOut: clockOut });
    return { successful: true, message: 'SHIFT UPDATED' };
  },
};

export const UPDATE_EMPLOYEE_REASON = {
  type: Timetable,
  args: {
    id: { type: GraphQLID },
    reason: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, reason } = args;
    await Shifts.update(id, { Reason: reason });
    return { successful: true, message: 'SHIFT UPDATED' };
  },
};

export const UPDATE_EMPLOYEE_ADJ = {
  type: Timetable,
  args: {
    id: { type: GraphQLID },
    adj: { type: GraphQLString },
    attendant: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, adj } = args;
    await Shifts.update(id, { Adj: adj });
    return { successful: true, message: 'SHIFT UPDATED' };
  },
};

export const UPDATE_EMPLOYEE_CODE = {
  type: Timetable,
  args: {
    id: { type: GraphQLID },
    code: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, code } = args;
    await Shifts.update(id, { Code: code });
    return { successful: true, message: 'SHIFT UPDATED' };
  },
};

export const UPDATE_EMPLOYEE_DUE_DATE = {
  type: Timetable,
  args: {
    id: { type: GraphQLID },
    date: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, date } = args;
    await Shifts.update(id, { Due_date: date });
    return { successful: true, message: 'SHIFT UPDATED' };
  },
};

export const UPDATE_EMPLOYEE_MIN = {
  type: Timetable,
  args: {
    id: { type: GraphQLID },
    min: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, min } = args;

    await Shifts.update(id, { Min: min });
    return { successful: true, message: 'SHIFT UPDATED' };
  },
};

/*export const LOGIN = {
  type: AttendantType,
  args: {
    TagID: { type: GraphQLString },
    Password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { TagID, Password } = args;

    const attendant = await Attendants.findOne({
      ID: TagID,
      Password: Password,
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
};*/
