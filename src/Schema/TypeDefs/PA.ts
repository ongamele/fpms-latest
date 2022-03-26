import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

export const PAType = new GraphQLObjectType({
  name: 'PA',
  fields: () => ({
    UniqueID: { type: GraphQLInt },
    FirstName: { type: GraphQLString },
    LastName: { type: GraphQLString },
    TagID: { type: GraphQLString },
    Average_Response_Time: { type: GraphQLInt },
    TRX_Today: { type: GraphQLInt },
    WorkHour_Today: { type: GraphQLString },
  }),
});
