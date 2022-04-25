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
exports.UPDATE_DATE = exports.CREATE_SHIFTS = void 0;
const graphql_1 = require("graphql");
const ShiftType_1 = require("../TypeDefs/ShiftType");
const Shifts_1 = require("../../Entities/Shifts");
exports.CREATE_SHIFTS = {
    type: ShiftType_1.ShiftType,
    args: {
        EmployeeID: { type: graphql_1.GraphQLInt },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { EmployeeID } = args;
            for (var i = 31; i >= 1; i--) {
                yield Shifts_1.Shifts.insert({
                    EmployeeID,
                    Shift_number: i,
                });
            }
            return Shifts_1.Shifts.find();
        });
    },
};
exports.UPDATE_DATE = {
    type: ShiftType_1.ShiftType,
    args: {
        MonthStart: { type: graphql_1.GraphQLString },
        MonthEnd: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { MonthStart, MonthEnd } = args;
            var mStart = new Date(MonthStart);
            var mEnd = new Date(MonthEnd);
            var Shift_number = 1;
            // loop for every day
            for (var dayDate = mStart; dayDate <= mEnd; dayDate.setDate(dayDate.getDate() + 1)) {
                const date = dayDate.toISOString().substr(0, 10);
                yield Shifts_1.Shifts.update({ Shift_number: Shift_number }, { Date: date });
                Shift_number = Shift_number + 1;
            }
            return { successful: true, message: 'SHIFT UPDATED' };
        });
    },
};
