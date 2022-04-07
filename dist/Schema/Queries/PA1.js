"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PA1 = void 0;
const graphql_1 = require("graphql");
const PA_1 = require("../TypeDefs/PA");
const PA1_1 = require("../../Entities/PA1");
exports.GET_PA1 = {
    type: new graphql_1.GraphQLList(PA_1.PAType),
    resolve() {
        return PA1_1.PA1.find({ order: { UniqueID: 'DESC' }, take: 1 });
    },
};
