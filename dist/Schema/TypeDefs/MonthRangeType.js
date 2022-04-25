"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthRangeType = void 0;
const graphql_1 = require("graphql");
exports.MonthRangeType = new graphql_1.GraphQLObjectType({
    name: 'MonthRangeType',
    fields: () => ({
        ID: { type: graphql_1.GraphQLInt },
        MonthStart: { type: graphql_1.GraphQLString },
        MonthEnd: { type: graphql_1.GraphQLString },
    }),
});
