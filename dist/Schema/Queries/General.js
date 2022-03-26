"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_GENERAL = void 0;
const graphql_1 = require("graphql");
const General_1 = require("../TypeDefs/General");
const General_2 = require("../../Entities/General");
exports.GET_GENERAL = {
    type: new graphql_1.GraphQLList(General_1.GeneralType),
    resolve() {
        return General_2.General.find({ order: { UniqueID: 'DESC' }, take: 1 });
    },
};
