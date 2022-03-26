"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PA3 = void 0;
const graphql_1 = require("graphql");
const PA_1 = require("../TypeDefs/PA");
const PA3_1 = require("../../Entities/PA3");
exports.GET_PA3 = {
    type: new graphql_1.GraphQLList(PA_1.PAType),
    resolve() {
        return PA3_1.PA3.find({ order: { UniqueID: 'DESC' }, take: 1 });
    },
};
