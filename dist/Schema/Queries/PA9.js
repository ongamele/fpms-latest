"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PA9 = void 0;
const graphql_1 = require("graphql");
const PA_1 = require("../TypeDefs/PA");
const PA9_1 = require("../../Entities/PA9");
exports.GET_PA9 = {
    type: new graphql_1.GraphQLList(PA_1.PAType),
    resolve() {
        return PA9_1.PA9.find({ order: { UniqueID: 'DESC' }, take: 1 });
    },
};
