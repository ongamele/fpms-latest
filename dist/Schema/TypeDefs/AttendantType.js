"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendantType = void 0;
const graphql_1 = require("graphql");
exports.AttendantType = new graphql_1.GraphQLObjectType({
    name: 'AttendantType',
    fields: () => ({
        ID: { type: graphql_1.GraphQLString },
        FirstName: { type: graphql_1.GraphQLString },
        LastName: { type: graphql_1.GraphQLString },
        EmployeeNumber: { type: graphql_1.GraphQLString },
        DateOfBirth: { type: graphql_1.GraphQLString },
        Position: { type: graphql_1.GraphQLString },
        DateOfEmployment: { type: graphql_1.GraphQLString },
        Password: { type: graphql_1.GraphQLString },
        SecurityQuestion: { type: graphql_1.GraphQLString },
        IdPhoto: { type: graphql_1.GraphQLString },
        Photo: { type: graphql_1.GraphQLString },
    }),
});
