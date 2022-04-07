"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_CONSTANTS = void 0;
const graphql_1 = require("graphql");
const Constants_1 = require("../TypeDefs/Constants");
const Constants_2 = require("../../Entities/Constants");
exports.GET_ALL_CONSTANTS = {
    type: new graphql_1.GraphQLList(Constants_1.ConstantsType),
    resolve() {
        return Constants_2.Constants.find();
    },
};
