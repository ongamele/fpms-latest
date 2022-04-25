"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstantsType = void 0;
const graphql_1 = require("graphql");
exports.ConstantsType = new graphql_1.GraphQLObjectType({
    name: 'Constants',
    fields: () => ({
        UniqueID: { type: graphql_1.GraphQLInt },
        EventTime: { type: graphql_1.GraphQLString },
        Fuel_Price_95: { type: graphql_1.GraphQLFloat },
        Fuel_Price_93: { type: graphql_1.GraphQLFloat },
        Fuel_Price_Diesel: { type: graphql_1.GraphQLFloat },
    }),
});
