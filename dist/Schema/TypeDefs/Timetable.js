"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timetable = void 0;
const graphql_1 = require("graphql");
exports.Timetable = new graphql_1.GraphQLObjectType({
    name: 'Timetable',
    fields: () => ({
        ID: { type: graphql_1.GraphQLID },
        FirstName: { type: graphql_1.GraphQLString },
        LastName: { type: graphql_1.GraphQLString },
        TagID: { type: graphql_1.GraphQLString },
        Days: { type: graphql_1.GraphQLString },
        Shifts: { type: graphql_1.GraphQLString },
        Start: { type: graphql_1.GraphQLString },
        End: { type: graphql_1.GraphQLString },
        ClockIn: { type: graphql_1.GraphQLString },
        ClockOut: { type: graphql_1.GraphQLString },
        Pumps: { type: graphql_1.GraphQLString },
        Min: { type: graphql_1.GraphQLString },
        Tea: { type: graphql_1.GraphQLString },
        Reason: { type: graphql_1.GraphQLString },
        Adj: { type: graphql_1.GraphQLString },
        Code: { type: graphql_1.GraphQLString },
        Due_date: { type: graphql_1.GraphQLString },
    }),
});
