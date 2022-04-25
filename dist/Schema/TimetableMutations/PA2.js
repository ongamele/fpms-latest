"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PA2 = void 0;
const graphql_1 = require("graphql");
const PA_1 = require("../TypeDefs/PA");
const PA2_1 = require("../../Entities/PA2");
exports.GET_PA2 = {
    type: new graphql_1.GraphQLList(PA_1.PAType),
    resolve() {
        return PA2_1.PA2.find({ order: { UniqueID: 'DESC' }, take: 1 });
    },
};
