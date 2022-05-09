import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { Connection, Repository } from 'typeorm';

import { TankType } from '../TypeDefs/TankType';
import { Tanks } from '../../Entities/Tanks';

export const GET_TANKS = {
  type: new GraphQLList(TankType),
  async resolve() {
    const tanks = await Tanks.find({
      relations: ['unleaded93Tank', 'unleaded95Tank', 'diesel10Tank'],
    });
    return tanks;
  },
};
