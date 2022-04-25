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
    Answer: { type: GraphQLString },
    shifts: { type: new GraphQLList(ShiftType) },
  }),
});