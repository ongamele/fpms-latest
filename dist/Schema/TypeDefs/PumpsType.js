"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PumpsType = void 0;
const graphql_1 = require("graphql");
const FuelType_1 = require("./FuelType");
exports.PumpsType = new graphql_1.GraphQLObjectType({
    name: 'PumpsType',
    fields: () => ({
        PumpID: { type: graphql_1.GraphQLString },
        unleaded93: { type: new graphql_1.GraphQLList(FuelType_1.FuelType) },
        unleaded95: { type: new graphql_1.GraphQLList(FuelType_1.FuelType) },
        diesel10: { type: new graphql_1.GraphQLList(FuelType_1.FuelType) },
    }),
});
