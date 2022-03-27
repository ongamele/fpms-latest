"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PA13 = void 0;
const graphql_1 = require("graphql");
const PA_1 = require("../TypeDefs/PA");
const PA13_1 = require("../../Entities/PA13");
exports.GET_PA13 = {
    type: new graphql_1.GraphQLList(PA_1.PAType),
    resolve() {
        return PA13_1.PA13.find({ order: { UniqueID: 'DESC' }, take: 1 });
    },
};
