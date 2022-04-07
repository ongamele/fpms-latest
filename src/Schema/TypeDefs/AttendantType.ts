import { GraphQLList } from 'graphql';
import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';
import { Timetable } from './Timetable';

export const AttendantType = new GraphQLObjectType({
  name: 'AttendantType',
  fields: () => ({
    ID: { type: GraphQLString },
    FirstName: { type: GraphQLString },
    LastName: { type: GraphQLString },
    EmployeeNumber: { type: GraphQLString },
    DateOfBirth: { type: GraphQLString },
    Position: { type: GraphQLString },
    DateOfEmployment: { type: GraphQLString },
    Password: { type: GraphQLString },
    SecurityQuestion: { type: GraphQLString },
    Photo: { type: GraphQLString },
    Shifts: { type: GraphQLList(Timetable) },
  }),
});
