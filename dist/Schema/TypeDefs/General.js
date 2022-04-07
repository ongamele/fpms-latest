"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralType = void 0;
const graphql_1 = require("graphql");
exports.GeneralType = new graphql_1.GraphQLObjectType({
    name: 'General',
    fields: () => ({
        UniqueID: { type: graphql_1.GraphQLInt },
        Avg_Response_Time_Sec: { type: graphql_1.GraphQLInt },
        TodayCount: { type: graphql_1.GraphQLInt },
        ThisMonthCount: { type: graphql_1.GraphQLInt },
    }),
});
