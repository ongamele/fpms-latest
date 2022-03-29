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
exports.UPDATE_ATTENDANT_DAY = exports.UPDATE_ATTENDANT_CLOCKING = exports.UPDATE_ATTENDANT1_PUMPS = exports.UPDATE_ATTENDANT1 = void 0;
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
const Attendant9_1 = require("../../ShiftsEntities/Attendant9");
const Attendant10_1 = require("../../ShiftsEntities/Attendant10");
const Attendant11_1 = require("../../ShiftsEntities/Attendant11");
const Attendant12_1 = require("../../ShiftsEntities/Attendant12");
const Attendant13_1 = require("../../ShiftsEntities/Attendant13");
const Attendant14_1 = require("../../ShiftsEntities/Attendant14");
const Attendant15_1 = require("../../ShiftsEntities/Attendant15");
const Attendant16_1 = require("../../ShiftsEntities/Attendant16");
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
            if (attendant == 'Perfect') {
                yield Attendant16_1.Attendant16.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Thulile') {
                yield Attendant4_1.Attendant4.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'David') {
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
            if (attendant == 'Mvuyisi') {
                yield Attendant15_1.Attendant15.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Tawanda') {
                yield Attendant3_1.Attendant3.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Aron') {
                yield Attendant9_1.Attendant9.update(id, { Start: start, End: end });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Tshifiwa') {
                yield Attendant11_1.Attendant11.update(id, { Start: start, End: end });
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
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Thapelo') {
                yield Attendant2_1.Attendant2.update(id, { Pumps: pumps });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Perfect') {
                yield Attendant16_1.Attendant16.update(id, { Pumps: pumps });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Thulile') {
                yield Attendant4_1.Attendant4.update(id, { Pumps: pumps });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'David') {
                yield Attendant5_1.Attendant5.update(id, { Pumps: pumps });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Dannick') {
                yield Attendant6_1.Attendant6.update(id, { Pumps: pumps });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Ntuthuko') {
                yield Attendant7_1.Attendant7.update(id, { Pumps: pumps });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Sabelo') {
                yield Attendant8_1.Attendant8.update(id, { Pumps: pumps });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Nyiko') {
                yield Attendant10_1.Attendant10.update(id, { Pumps: pumps });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Vusi') {
                yield Attendant12_1.Attendant12.update(id, { Pumps: pumps });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Sicelo') {
                yield Attendant13_1.Attendant13.update(id, { Pumps: pumps });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Thamsanqa') {
                yield Attendant14_1.Attendant14.update(id, { Pumps: pumps });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Mvuyisi') {
                yield Attendant15_1.Attendant15.update(id, { Pumps: pumps });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Tawanda') {
                yield Attendant3_1.Attendant3.update(id, { Pumps: pumps });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Aron') {
                yield Attendant9_1.Attendant9.update(id, { Pumps: pumps });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
            if (attendant == 'Tshifiwa') {
                yield Attendant11_1.Attendant11.update(id, { Pumps: pumps });
                return { successful: true, message: 'SHIFT UPDATED' };
            }
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
            if (attendant == 'Sithembile') {
                const updated_clocking = Attendant1_1.Attendant1.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Thapelo') {
                const updated_clocking = Attendant2_1.Attendant2.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Perfect') {
                const updated_clocking = Attendant16_1.Attendant16.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Thulile') {
                const updated_clocking = Attendant4_1.Attendant4.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'David') {
                const updated_clocking = Attendant5_1.Attendant5.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Dannick') {
                const updated_clocking = Attendant6_1.Attendant6.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Ntuthuko') {
                const updated_clocking = Attendant7_1.Attendant7.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Sabelo') {
                const updated_clocking = Attendant8_1.Attendant8.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Nyiko') {
                const updated_clocking = Attendant10_1.Attendant10.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Aron') {
                const updated_clocking = Attendant9_1.Attendant9.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Tshifiwa') {
                const updated_clocking = Attendant11_1.Attendant11.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Vusi') {
                const updated_clocking = Attendant12_1.Attendant12.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Sicelo') {
                const updated_clocking = Attendant13_1.Attendant13.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Thamsanqa') {
                const updated_clocking = Attendant14_1.Attendant14.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Mvuyisi') {
                const updated_clocking = Attendant15_1.Attendant15.update(id, {
                    ClockIn: clockIn,
                    ClockOut: clockOut,
                    Reason: reason,
                    Code: code,
                    Min: min,
                });
                return updated_clocking;
            }
            if (attendant == 'Tawanda') {
                const updated_clocking = Attendant3_1.Attendant3.update(id, {
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
exports.UPDATE_ATTENDANT_DAY = {
    type: Timetable_1.Timetable,
    args: {
        id: { type: graphql_1.GraphQLID },
        day: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, day } = args;
            yield Attendant1_1.Attendant1.update(id, { Days: day });
            yield Attendant2_1.Attendant2.update(id, { Days: day });
            yield Attendant16_1.Attendant16.update(id, { Days: day });
            yield Attendant4_1.Attendant4.update(id, { Days: day });
            yield Attendant5_1.Attendant5.update(id, { Days: day });
            yield Attendant6_1.Attendant6.update(id, { Days: day });
            yield Attendant7_1.Attendant7.update(id, { Days: day });
            yield Attendant8_1.Attendant8.update(id, { Days: day });
            yield Attendant10_1.Attendant10.update(id, { Days: day });
            yield Attendant12_1.Attendant12.update(id, { Days: day });
            yield Attendant13_1.Attendant13.update(id, { Days: day });
            yield Attendant14_1.Attendant14.update(id, { Days: day });
            yield Attendant15_1.Attendant15.update(id, { Days: day });
            yield Attendant3_1.Attendant3.update(id, { Days: day });
            yield Attendant9_1.Attendant9.update(id, { Days: day });
            yield Attendant11_1.Attendant11.update(id, { Days: day });
            return { successful: true, message: 'DAY UPDATED' };
        });
    },
};
