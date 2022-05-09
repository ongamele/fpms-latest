"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TankFuelType = void 0;
const graphql_1 = require("graphql");
exports.TankFuelType = new graphql_1.GraphQLObjectType({
    name: 'TankFuelType',
    fields: () => ({
        ID: { type: graphql_1.GraphQLInt },
        TankID: { type: graphql_1.GraphQLString },
        Readings: { type: graphql_1.GraphQLInt },
        Date: { type: graphql_1.GraphQLString },
        Number: { type: graphql_1.GraphQLInt },
    }),
});
