import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

export const GeneralType = new GraphQLObjectType({
  name: 'General',
  fields: () => ({
    UniqueID: { type: GraphQLInt },
    Avg_Response_Time_Sec: { type: GraphQLInt },
    TodayCount: { type: GraphQLInt },
    ThisMonthCount: { type: GraphQLInt },
  }),
});
