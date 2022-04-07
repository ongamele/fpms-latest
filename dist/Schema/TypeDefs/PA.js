"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAType = void 0;
const graphql_1 = require("graphql");
exports.PAType = new graphql_1.GraphQLObjectType({
    name: 'PA',
    fields: () => ({
        UniqueID: { type: graphql_1.GraphQLInt },
        FirstName: { type: graphql_1.GraphQLString },
        LastName: { type: graphql_1.GraphQLString },
        TagID: { type: graphql_1.GraphQLString },
        Average_Response_Time: { type: graphql_1.GraphQLInt },
        TRX_Today: { type: graphql_1.GraphQLInt },
        WorkHour_Today: { type: graphql_1.GraphQLString },
    }),
});
