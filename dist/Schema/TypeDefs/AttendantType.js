"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendantType = void 0;
const graphql_1 = require("graphql");
const graphql_2 = require("graphql");
const Timetable_1 = require("./Timetable");
exports.AttendantType = new graphql_2.GraphQLObjectType({
    name: 'AttendantType',
    fields: () => ({
        ID: { type: graphql_2.GraphQLString },
        FirstName: { type: graphql_2.GraphQLString },
        LastName: { type: graphql_2.GraphQLString },
        EmployeeNumber: { type: graphql_2.GraphQLString },
        DateOfBirth: { type: graphql_2.GraphQLString },
        Position: { type: graphql_2.GraphQLString },
        DateOfEmployment: { type: graphql_2.GraphQLString },
        Password: { type: graphql_2.GraphQLString },
        SecurityQuestion: { type: graphql_2.GraphQLString },
        Photo: { type: graphql_2.GraphQLString },
        Shifts: { type: (0, graphql_1.GraphQLList)(Timetable_1.Timetable) },
    }),
});
