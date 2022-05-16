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
        Answer: { type: graphql_2.GraphQLString },
        Photo: { type: graphql_2.GraphQLString },
        ShoeSize: { type: graphql_2.GraphQLInt },
        TShirtSize: { type: graphql_2.GraphQLString },
        JacketSize: { type: graphql_2.GraphQLString },
        PantsSize: { type: graphql_2.GraphQLInt },
        Bank: { type: graphql_2.GraphQLString },
        AccountNumber: { type: graphql_2.GraphQLInt },
        AccountType: { type: graphql_2.GraphQLString },
        BranchCode: { type: graphql_2.GraphQLString },
        StreetNumber: { type: graphql_2.GraphQLString },
        StreetName: { type: graphql_2.GraphQLString },
        Suburb: { type: graphql_2.GraphQLString },
        City: { type: graphql_2.GraphQLString },
        Code: { type: graphql_2.GraphQLString },
        TaxNumber: { type: graphql_2.GraphQLInt },
        shifts: { type: new graphql_1.GraphQLList(ShiftType_1.ShiftType) },
    }),
});
