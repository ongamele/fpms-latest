"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ATTENDANTS = void 0;
const graphql_1 = require("graphql");
const AttendantType_1 = require("../TypeDefs/AttendantType");
const Attendants_1 = require("../../Entities/Attendants");
exports.GET_ATTENDANTS = {
    type: new graphql_1.GraphQLList(AttendantType_1.AttendantType),
    resolve() {
        return Attendants_1.Attendants.find();
    },
};
