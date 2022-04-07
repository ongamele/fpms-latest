"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PA8 = void 0;
const graphql_1 = require("graphql");
const PA_1 = require("../TypeDefs/PA");
const PA8_1 = require("../../Entities/PA8");
exports.GET_PA8 = {
    type: new graphql_1.GraphQLList(PA_1.PAType),
    resolve() {
        return PA8_1.PA8.find({ order: { UniqueID: 'DESC' }, take: 1 });
    },
};
