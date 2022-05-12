"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveType = void 0;
const graphql_1 = require("graphql");
exports.LeaveType = new graphql_1.GraphQLObjectType({
    name: 'LeaveType',
    fields: () => ({
        ID: { type: graphql_1.GraphQLInt },
        EmployeeID: { type: graphql_1.GraphQLString },
        Date: { type: graphql_1.GraphQLString },
        Leave: { type: graphql_1.GraphQLString },
        ShiftType: { type: graphql_1.GraphQLInt },
    }),
});
