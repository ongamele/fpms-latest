"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PA5 = void 0;
const graphql_1 = require("graphql");
const PA_1 = require("../TypeDefs/PA");
const PA5_1 = require("../../Entities/PA5");
exports.GET_PA5 = {
    type: new graphql_1.GraphQLList(PA_1.PAType),
    resolve() {
        return PA5_1.PA5.find({ order: { UniqueID: 'DESC' }, take: 1 });
    },
};