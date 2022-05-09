import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { FuelType } from '../TypeDefs/FuelType';
import { Unleaded93 } from '../../Entities/Unleaded93';
import { Unleaded95 } from '../../Entities/Unleaded95';
import { Diesel10 } from '../../Entities/Diesel10';

export const CREATE_FUEL_READINGS = {
  type: FuelType,
  args: {
    PumpName: { type: GraphQLString },
  },

  async resolve(parent: any, args: any) {
    const { PumpName } = args;
    for (var i = 31; i >= 1; i--) {
      await Unleaded93.insert({
        PumpID: PumpName,
        Number: i,
      });

      await Unleaded95.insert({
        PumpID: PumpName,
        Number: i,
      });

      await Diesel10.insert({
        PumpID: PumpName,
        Number: i,
      });
    }

    return Unleaded93.find();
  },
};

export const UPDATE_UNLEADED_93_READINGS = {
  type: FuelType,
  args: {
    id: { type: GraphQLID },
    readings: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { id, readings } = args;

    const FuelReadings = await Unleaded93.update(id, { Readings: readings });
    return FuelReadings;
  },
};

export const UPDATE_UNLEADED_95_READINGS = {
  type: FuelType,
  args: {
    id: { type: GraphQLID },
    readings: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { id, readings } = args;

    const FuelReadings = await Unleaded95.update(id, { Readings: readings });
    return FuelReadings;
  },
};

export const UPDATE_DIESEL_10_READINGS = {
  type: FuelType,
  args: {
    id: { type: GraphQLID },
    readings: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { id, readings } = args;

    const FuelReadings = await Diesel10.update(id, { Readings: readings });
    return FuelReadings;
  },
};

export const UPDATE_WETSTOCK_DATE = {
  type: FuelType,
  args: {
    MonthStart: { type: GraphQLString },
    MonthEnd: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { MonthStart, MonthEnd } = args;

    var mStart = new Date(MonthStart);
    var mEnd = new Date(MonthEnd);
    var number = 1;
    // loop for every day
    for (
      var dayDate = mStart;
      dayDate <= mEnd;
      dayDate.setDate(dayDate.getDate() + 1)
    ) {
      const date = dayDate.toISOString().substr(0, 10);
      await Unleaded93.update({ Number: number }, { Date: date });
      await Unleaded95.update({ Number: number }, { Date: date });
      await Diesel10.update({ Number: number }, { Date: date });
      number = number + 1;
    }
    return { successful: true, message: 'WET STOCK UPDATED' };
  },
};
