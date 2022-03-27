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
exports.UPDATE_ATTENDANT_CLOCKING = exports.UPDATE_ATTENDANT1_PUMPS = exports.UPDATE_ATTENDANT1 = void 0;
const graphql_1 = require("graphql");
const Timetable_1 = require("../TypeDefs/Timetable");
const Attendant1_1 = require("../../ShiftsEntities/Attendant1");
const Attendant2_1 = require("../../ShiftsEntities/Attendant2");
const Attendant3_1 = require("../../ShiftsEntities/Attendant3");
const Attendant4_1 = require("../../ShiftsEntities/Attendant4");
const Attendant5_1 = require("../../ShiftsEntities/Attendant5");
const Attendant6_1 = require("../../ShiftsEntities/Attendant6");
const Attendant7_1 = require("../../ShiftsEntities/Attendant7");
const Attendant8_1 = require("../../ShiftsEntities/Attendant8");
const Attendant10_1 = require("../../ShiftsEntities/Attendant10");
const Attendant12_1 = require("../../ShiftsEntities/Attendant12");
const Attendant13_1 = require("../../ShiftsEntities/Attendant13");
const Attendant14_1 = require("../../ShiftsEntities/Attendant14");
const Attendant15_1 = require("../../ShiftsEntities/Attendant15");
exports.UPDATE_ATTENDANT1 = {
    type: Timetable_1.Timetable,
    args: {
        id: { type: graphql_1.GraphQLID },
        start: { type: graphql_1.GraphQLString },
        end: { type: graphql_1.GraphQLString },
        attendant: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, start, end, attendant } = args;
            const attendantData = yield Attendant1_1.Attendant1.findOne({ ID: id });
            if (attendant == 'Sithembile') {
                yield Attendant1_1.Attendant1.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Thapelo') {
                yield Attendant2_1.Attendant2.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Lethu') {
                yield Attendant3_1.Attendant3.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Thulile') {
                yield Attendant4_1.Attendant4.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Marvellous') {
                yield Attendant5_1.Attendant5.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Dannick') {
                yield Attendant6_1.Attendant6.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Ntuthuko') {
                yield Attendant7_1.Attendant7.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Sabelo') {
                yield Attendant8_1.Attendant8.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Nyiko') {
                yield Attendant10_1.Attendant10.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Vusi') {
                yield Attendant12_1.Attendant12.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Sicelo') {
                yield Attendant13_1.Attendant13.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Thamsanqa') {
                yield Attendant14_1.Attendant14.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Joseph') {
                yield Attendant15_1.Attendant15.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
        });
    },
};
exports.UPDATE_ATTENDANT1_PUMPS = {
    type: Timetable_1.Timetable,
    args: {
        id: { type: graphql_1.GraphQLID },
        pumps: { type: graphql_1.GraphQLString },
        attendant: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, pumps, attendant } = args;
            /* const attendantData = await Attendant1.findOne({ ID: id });
        
            if (!attendantData) {
              throw new Error('SHIFT DOESNT EXIST');
            }*/
            if (attendant == 'Sithembile') {
                yield Attendant1_1.Attendant1.update(id, { Pumps: pumps });
            }
            if (attendant == 'Thapelo') {
                yield Attendant2_1.Attendant2.update(id, { Pumps: pumps });
            }
            if (attendant == 'Lethu') {
                yield Attendant3_1.Attendant3.update(id, { Pumps: pumps });
            }
            if (attendant == 'Thulile') {
                yield Attendant4_1.Attendant4.update(id, { Pumps: pumps });
            }
            if (attendant == 'Marvellous') {
                yield Attendant5_1.Attendant5.update(id, { Pumps: pumps });
            }
            if (attendant == 'Dannick') {
                yield Attendant6_1.Attendant6.update(id, { Pumps: pumps });
            }
            if (attendant == 'Ntuthuko') {
                yield Attendant7_1.Attendant7.update(id, { Pumps: pumps });
            }
            if (attendant == 'Sabelo') {
                yield Attendant8_1.Attendant8.update(id, { Pumps: pumps });
            }
            if (attendant == 'Nyiko') {
                yield Attendant10_1.Attendant10.update(id, { Pumps: pumps });
            }
            if (attendant == 'Vusi') {
                yield Attendant12_1.Attendant12.update(id, { Pumps: pumps });
            }
            if (attendant == 'Sicelo') {
                yield Attendant13_1.Attendant13.update(id, { Pumps: pumps });
            }
            if (attendant == 'Thamsanqa') {
                yield Attendant14_1.Attendant14.update(id, { Pumps: pumps });
            }
            if (attendant == 'Joseph') {
                yield Attendant15_1.Attendant15.update(id, { Pumps: pumps });
            }
            return { successful: true, message: 'PUMPS UPDATED' };
        });
    },
};
exports.UPDATE_ATTENDANT_CLOCKING = {
    type: Timetable_1.Timetable,
    args: {
        id: { type: graphql_1.GraphQLID },
        clockIn: { type: graphql_1.GraphQLString },
        clockOut: { type: graphql_1.GraphQLString },
        reason: { type: graphql_1.GraphQLString },
        code: { type: graphql_1.GraphQLString },
        min: { type: graphql_1.GraphQLString },
        tagID: { type: graphql_1.GraphQLString },
        attendant: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, clockIn, clockOut, reason, code, min, tagID, attendant } = args;
            if (attendant == 'Thapelo') {
                const updated_clocking = yield Attendant2_1.Attendant2.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Lethu') {
                const updated_clocking = yield Attendant3_1.Attendant3.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Thulile') {
                const updated_clocking = yield Attendant4_1.Attendant4.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Marvellous') {
                const updated_clocking = yield Attendant5_1.Attendant5.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Dannick') {
                const updated_clocking = yield Attendant6_1.Attendant6.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Ntuthuko') {
                const updated_clocking = yield Attendant7_1.Attendant7.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Sabelo') {
                const updated_clocking = yield Attendant8_1.Attendant8.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Nyiko') {
                const updated_clocking = yield Attendant10_1.Attendant10.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Vusi') {
                const updated_clocking = yield Attendant12_1.Attendant12.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Sicelo') {
                const updated_clocking = yield Attendant13_1.Attendant13.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Thamsanqa') {
                const updated_clocking = yield Attendant14_1.Attendant14.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Joseph') {
                const updated_clocking = yield Attendant15_1.Attendant15.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
        });
    },
};
