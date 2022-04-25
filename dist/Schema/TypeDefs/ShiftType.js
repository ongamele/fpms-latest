"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftType = void 0;
const graphql_1 = require("graphql");
exports.ShiftType = new graphql_1.GraphQLObjectType({
    name: 'ShiftType',
    fields: () => ({
        ID: { type: graphql_1.GraphQLInt },
        EmployeeID: { type: graphql_1.GraphQLInt },
        Pumps: { type: graphql_1.GraphQLString },
        Start: { type: graphql_1.GraphQLString },
        End: { type: graphql_1.GraphQLString },
        Days: { type: graphql_1.GraphQLString },
        Date: { type: graphql_1.GraphQLString },
        ClockIn: { type: graphql_1.GraphQLString },
        ClockOut: { type: graphql_1.GraphQLString },
        Min: { type: graphql_1.GraphQLString },
        Reason: { type: graphql_1.GraphQLString },
        Adj: { type: graphql_1.GraphQLString },
        Code: { type: graphql_1.GraphQLString },
        Due_date: { type: graphql_1.GraphQLString },
        Pay_hrs: { type: graphql_1.GraphQLString },
        Shift_number: { type: graphql_1.GraphQLInt },
    }),
});
