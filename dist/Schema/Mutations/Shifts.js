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
exports.CREATE_ATTENDANT_SHIFTS = void 0;
const graphql_1 = require("graphql");
const ShiftType_1 = require("../TypeDefs/ShiftType");
const Shifts_1 = require("../../Entities/Shifts");
exports.CREATE_ATTENDANT_SHIFTS = {
    type: ShiftType_1.ShiftType,
    args: {
        AttendantID: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { AttendantID } = args;
            const shift = yield Shifts_1.Shifts.insert({
                AttendantID,
            });
            return shift;
        });
    },
};
