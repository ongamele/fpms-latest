"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PA6 = void 0;
const graphql_1 = require("graphql");
const PA_1 = require("../TypeDefs/PA");
const PA6_1 = require("../../Entities/PA6");
exports.GET_PA6 = {
    type: new graphql_1.GraphQLList(PA_1.PAType),
    resolve() {
        return PA6_1.PA6.find({ order: { UniqueID: 'DESC' }, take: 1 });
    },
};
