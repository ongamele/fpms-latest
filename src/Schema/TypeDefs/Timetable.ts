import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
} from 'graphql';

export const Timetable = new GraphQLObjectType({
  name: 'Timetable',
  fields: () => ({
    ID: { type: GraphQLID },
    FirstName: { type: GraphQLString },
    LastName: { type: GraphQLString },
    TagID: { type: GraphQLString },
    Days: { type: GraphQLString },
    Shifts: { type: GraphQLString },
    Start: { type: GraphQLString },
    End: { type: GraphQLString },
    ClockIn: { type: GraphQLString },
    ClockOut: { type: GraphQLString },
    Pumps: { type: GraphQLString },
    Min: { type: GraphQLString },
    Tea: { type: GraphQLString },
    Reason: { type: GraphQLString },
    Adj: { type: GraphQLString },
    Code: { type: GraphQLString },
    Due_date: { type: GraphQLString },
  }),
});
