import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

export const LeaveType = new GraphQLObjectType({
  name: 'LeaveType',
  fields: () => ({
    ID: { type: GraphQLInt },
    EmployeeID: { type: GraphQLString },
    Date: { type: GraphQLString },
    Leave: { type: GraphQLString },
    ShiftType: { type: GraphQLInt },
  }),
});
