import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

export const PumpsType = new GraphQLObjectType({
  name: 'Pumps',
  fields: () => ({
    UniqueID: { type: GraphQLInt },
    Client: { type: GraphQLInt },
    FirstName: { type: GraphQLString },
    EntryTime: { type: GraphQLString },
    TimerTransact: { type: GraphQLInt },
    TimerWait: { type: GraphQLInt },
    OutOfOrder: { type: GraphQLInt },
    TodayCount: { type: GraphQLInt },
    LongWaitCount: { type: GraphQLInt },
  }),
});
