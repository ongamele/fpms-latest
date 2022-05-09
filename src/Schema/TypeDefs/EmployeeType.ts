import { GraphQLList } from 'graphql';
import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';
import { ShiftType } from './ShiftType';

export const EmployeeType = new GraphQLObjectType({
  name: 'EmployeeType',
  fields: () => ({
    FirstName: { type: GraphQLString },
    LastName: { type: GraphQLString },
    EmployeeID: { type: GraphQLInt },
    IdNumber: { type: GraphQLString },
    CellNumber: { type: GraphQLString },
    Gender: { type: GraphQLString },
    Position: { type: GraphQLString },
    DateOfEmployment: { type: GraphQLString },
    Password: { type: GraphQLString },
    SecurityQuestion: { type: GraphQLString },
    Photo: { type: GraphQLString },
    ShoeSize: { type: GraphQLInt },
    TShirtSize: { type: GraphQLString },
    JacketSize: { type: GraphQLString },
    PantsSize: { type: GraphQLInt },
    Bank: { type: GraphQLString },
    AccountNumber: { type: GraphQLInt },
    AccountType: { type: GraphQLString },
    BranchCode: { type: GraphQLString },
    StreetNumber: { type: GraphQLString },
    StreetName: { type: GraphQLString },
    Suburb: { type: GraphQLString },
    City: { type: GraphQLInt },
    Code: { type: GraphQLInt },
    TaxNumber: { type: GraphQLInt },
    shifts: { type: new GraphQLList(ShiftType) },
  }),
});
