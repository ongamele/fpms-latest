"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ATTENDANT_TIMETABLE = exports.GET_ATTENDANTS = void 0;
const graphql_1 = require("graphql");
const AttendantType_1 = require("../TypeDefs/AttendantType");
const Attendants_1 = require("../../Entities/Attendants");
const Attendant1_1 = require("../../ShiftsEntities/Attendant1");
const Attendant2_1 = require("../../ShiftsEntities/Attendant2");
const Attendant3_1 = require("../../ShiftsEntities/Attendant3");
const Attendant4_1 = require("../../ShiftsEntities/Attendant4");
const Attendant5_1 = require("../../ShiftsEntities/Attendant5");
const Attendant6_1 = require("../../ShiftsEntities/Attendant6");
const Attendant7_1 = require("../../ShiftsEntities/Attendant7");
const Attendant8_1 = require("../../ShiftsEntities/Attendant8");
const Attendant9_1 = require("../../ShiftsEntities/Attendant9");
const Attendant10_1 = require("../../ShiftsEntities/Attendant10");
const Attendant11_1 = require("../../ShiftsEntities/Attendant11");
const Attendant12_1 = require("../../ShiftsEntities/Attendant12");
const Attendant13_1 = require("../../ShiftsEntities/Attendant13");
const Attendant14_1 = require("../../ShiftsEntities/Attendant14");
const Attendant15_1 = require("../../ShiftsEntities/Attendant15");
const Attendant16_1 = require("../../ShiftsEntities/Attendant16");
exports.GET_ATTENDANTS = {
    type: new graphql_1.GraphQLList(AttendantType_1.AttendantType),
    resolve() {
        return Attendants_1.Attendants.find();
    },
};
exports.GET_ATTENDANT_TIMETABLE = {
    type: AttendantType_1.AttendantType,
    args: {
        tagID: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tagID } = args;
            const attendant = yield Attendants_1.Attendants.findOne({
                ID: tagID,
            });
            var attData = {};
            if (attendant.FirstName == 'Sithembile') {
                const allShifts = yield Attendant1_1.Attendant1.find({
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
            if (attendant.FirstName == 'Thapelo') {
                const allShifts = yield Attendant2_1.Attendant2.find({
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
            if (attendant.FirstName == 'Tawanda') {
                const allShifts = yield Attendant3_1.Attendant3.find({
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
            if (attendant.FirstName == 'Thulile') {
                const allShifts = yield Attendant4_1.Attendant4.find({
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
            if (attendant.FirstName == 'David') {
                const allShifts = yield Attendant5_1.Attendant5.find({
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
            if (attendant.FirstName == 'Dannick') {
                const allShifts = yield Attendant6_1.Attendant6.find({
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
            if (attendant.FirstName == 'Ntuthuko') {
                const allShifts = yield Attendant7_1.Attendant7.find({
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
            if (attendant.FirstName == 'Sabelo') {
                const allShifts = yield Attendant8_1.Attendant8.find({
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
            if (attendant.FirstName == 'Aron') {
                const allShifts = yield Attendant9_1.Attendant9.find({
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
            if (attendant.FirstName == 'Nyiko') {
                const allShifts = yield Attendant10_1.Attendant10.find({
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
            if (attendant.FirstName == 'Tshifiwa') {
                const allShifts = yield Attendant11_1.Attendant11.find({
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
            if (attendant.FirstName == 'Visi') {
                const allShifts = yield Attendant12_1.Attendant12.find({
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
            if (attendant.FirstName == 'Sicelo') {
                const allShifts = yield Attendant13_1.Attendant13.find({
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
            if (attendant.FirstName == 'Thamsanqa') {
                const allShifts = yield Attendant14_1.Attendant14.find({
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
            if (attendant.FirstName == 'Mvuyisi') {
                const allShifts = yield Attendant15_1.Attendant15.find({
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
            if (attendant.FirstName == 'Perfect]') {
                const allShifts = yield Attendant16_1.Attendant16.find({
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
        });
    },
};
