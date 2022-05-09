"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuelType = void 0;
const graphql_1 = require("graphql");
exports.FuelType = new graphql_1.GraphQLObjectType({
    name: 'FuelType',
    fields: () => ({
        ID: { type: graphql_1.GraphQLInt },
        PumpID: { type: graphql_1.GraphQLString },
        Readings: { type: graphql_1.GraphQLInt },
        Date: { type: graphql_1.GraphQLString },
        Number: { type: graphql_1.GraphQLInt },
    }),
});
