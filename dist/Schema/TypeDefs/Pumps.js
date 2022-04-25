"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PumpsType = void 0;
const graphql_1 = require("graphql");
exports.PumpsType = new graphql_1.GraphQLObjectType({
    name: 'Pumps',
    fields: () => ({
        UniqueID: { type: graphql_1.GraphQLInt },
        Client: { type: graphql_1.GraphQLInt },
        FirstName: { type: graphql_1.GraphQLString },
        EntryTime: { type: graphql_1.GraphQLString },
        TimerTransact: { type: graphql_1.GraphQLInt },
        TimerWait: { type: graphql_1.GraphQLInt },
        OutOfOrder: { type: graphql_1.GraphQLInt },
        TodayCount: { type: graphql_1.GraphQLInt },
        LongWaitCount: { type: graphql_1.GraphQLInt },
    }),
});
