"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PA10 = void 0;
const graphql_1 = require("graphql");
const PA_1 = require("../TypeDefs/PA");
const PA10_1 = require("../../Entities/PA10");
exports.GET_PA10 = {
    type: new graphql_1.GraphQLList(PA_1.PAType),
    resolve() {
        return PA10_1.PA10.find({ order: { UniqueID: 'DESC' }, take: 1 });
    },
};
