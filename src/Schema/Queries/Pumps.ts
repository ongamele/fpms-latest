import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { Connection, Repository } from 'typeorm';

import { PumpsType } from '../TypeDefs/PumpsType';
import { FuelType } from '../TypeDefs/FuelType';
import { Pumps } from '../../Entities/Pumps';
import { Unleaded93 } from '../../Entities/Unleaded93';

export const GET_PUMPS = {
  type: new GraphQLList(PumpsType),
  async resolve() {
    const pumps = await Pumps.find({
      relations: ['unleaded93', 'unleaded95', 'diesel10'],
    });
    return pumps;
  },
};
