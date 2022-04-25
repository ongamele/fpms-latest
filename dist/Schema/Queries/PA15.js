"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PA15 = void 0;
const graphql_1 = require("graphql");
const PA_1 = require("../TypeDefs/PA");
const PA15_1 = require("../../Entities/PA15");
exports.GET_PA15 = {
    type: new graphql_1.GraphQLList(PA_1.PAType),
    resolve() {
        return PA15_1.PA15.find({ order: { UniqueID: 'DESC' }, take: 1 });
    },
};
