"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_SHIFTS = void 0;
const graphql_1 = require("graphql");
const ShiftType_1 = require("../TypeDefs/ShiftType");
const Shifts_1 = require("../../Entities/Shifts");
exports.GET_SHIFTS = {
    type: new graphql_1.GraphQLList(ShiftType_1.ShiftType),
    resolve() {
        return Shifts_1.Shifts.find();
    },
};
