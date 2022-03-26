import { GraphQLList } from 'graphql';
import { ConstantsType } from '../TypeDefs/Constants';
import { Constants } from '../../Entities/Constants';

export const GET_ALL_CONSTANTS = {
  type: new GraphQLList(ConstantsType),
  resolve() {
    return Constants.find();
  },
};
