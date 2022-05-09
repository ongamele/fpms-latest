"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TankType = void 0;
const graphql_1 = require("graphql");
const TankFuelType_1 = require("./TankFuelType");
exports.TankType = new graphql_1.GraphQLObjectType({
    name: 'TankType',
    fields: () => ({
        TankID: { type: graphql_1.GraphQLString },
        unleaded93Tank: { type: new graphql_1.GraphQLList(TankFuelType_1.TankFuelType) },
        unleaded95Tank: { type: new graphql_1.GraphQLList(TankFuelType_1.TankFuelType) },
        diesel10Tank: { type: new graphql_1.GraphQLList(TankFuelType_1.TankFuelType) },
    }),
});
