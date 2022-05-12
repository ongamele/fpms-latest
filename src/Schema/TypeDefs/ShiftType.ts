import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

export const ShiftType = new GraphQLObjectType({
  name: 'ShiftType',
  fields: () => ({
    ID: { type: GraphQLInt },
    EmployeeID: { type: GraphQLInt },
    Pumps: { type: GraphQLString },
    Start: { type: GraphQLString },
    End: { type: GraphQLString },
    Days: { type: GraphQLString },
    Date: { type: GraphQLString },
    ClockIn: { type: GraphQLString },
    ClockOut: { type: GraphQLString },
    Min: { type: GraphQLString },
    Tea: { type: GraphQLString },
    Reason: { type: GraphQLString },
    Adj: { type: GraphQLString },
    Code: { type: GraphQLString },
    Due_date: { type: GraphQLString },
    Pay_hrs: { type: GraphQLString },
    Shift_number: { type: GraphQLInt },
  }),
});
