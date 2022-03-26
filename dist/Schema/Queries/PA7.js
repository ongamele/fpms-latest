"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PA7 = void 0;
const graphql_1 = require("graphql");
const PA_1 = require("../TypeDefs/PA");
const PA7_1 = require("../../Entities/PA7");
exports.GET_PA7 = {
    type: new graphql_1.GraphQLList(PA_1.PAType),
    resolve() {
        return PA7_1.PA7.find({ order: { UniqueID: 'DESC' }, take: 1 });
    },
};
