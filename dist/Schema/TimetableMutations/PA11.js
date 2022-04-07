"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PA11 = void 0;
const graphql_1 = require("graphql");
const PA_1 = require("../TypeDefs/PA");
const PA11_1 = require("../../Entities/PA11");
exports.GET_PA11 = {
    type: new graphql_1.GraphQLList(PA_1.PAType),
    resolve() {
        return PA11_1.PA11.find({ order: { UniqueID: 'DESC' }, take: 1 });
    },
};
