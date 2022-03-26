"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_JOURNAL = void 0;
const graphql_1 = require("graphql");
const Statistics_1 = require("../TypeDefs/Statistics");
const Statistics_2 = require("../../Entities/Statistics");
exports.GET_JOURNAL = {
    type: new graphql_1.GraphQLList(Statistics_1.StatisticsType),
    resolve() {
        return Statistics_2.Statistics.find({ order: { UniqueID: 'DESC' }, take: 50 });
    },
};
