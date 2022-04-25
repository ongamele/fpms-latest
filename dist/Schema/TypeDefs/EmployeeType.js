"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeType = void 0;
const graphql_1 = require("graphql");
const graphql_2 = require("graphql");
const ShiftType_1 = require("./ShiftType");
exports.EmployeeType = new graphql_2.GraphQLObjectType({
    name: 'EmployeeType',
    fields: () => ({
        FirstName: { type: graphql_2.GraphQLString },
        LastName: { type: graphql_2.GraphQLString },
        EmployeeID: { type: graphql_2.GraphQLInt },
        IdNumber: { type: graphql_2.GraphQLString },
        CellNumber: { type: graphql_2.GraphQLString },
        Gender: { type: graphql_2.GraphQLString },
        Position: { type: graphql_2.GraphQLString },
        DateOfEmployment: { type: graphql_2.GraphQLString },
        Password: { type: graphql_2.GraphQLString },
        SecurityQuestion: { type: graphql_2.GraphQLString },
        Photo: { type: graphql_2.GraphQLString },
        Answer: { type: graphql_2.GraphQLString },
        shifts: { type: new graphql_1.GraphQLList(ShiftType_1.ShiftType) },
    }),
});
