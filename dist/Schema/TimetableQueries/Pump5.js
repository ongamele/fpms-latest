"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PUMP_5 = void 0;
const graphql_1 = require("graphql");
const Pumps_1 = require("../TypeDefs/Pumps");
const Pump5_1 = require("../../Entities/Pump5");
exports.GET_PUMP_5 = {
    type: new graphql_1.GraphQLList(Pumps_1.PumpsType),
    resolve() {
        return Pump5_1.Pump5.find({ order: { UniqueID: 'DESC' }, take: 1 });
    },
};
