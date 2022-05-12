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

export const DELETE_UNLEADED_93 = {
  type: FuelType,
  args: {
    PumpID: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { PumpID } = args;

    const unleaded93 = await Unleaded93.find({
      where: { PumpID: PumpID },
    });

    for (var i = 0; i <= unleaded93.length + 1; i++) {
      let id = unleaded93[i].ID;

      await Unleaded93.delete(id);

      if (i + 1 == unleaded93.length) {
        // console.log('Not Completed');
        return { PumpID: id };
      }
    }
  },
};

export const DELETE_UNLEADED_95 = {
  type: FuelType,
  args: {
    PumpID: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { PumpID } = args;

    const unleaded95 = await Unleaded95.find({
      where: { PumpID: PumpID },
    });

    for (var i = 0; i <= unleaded95.length + 1; i++) {
      let id = unleaded95[i].ID;

      await Unleaded95.delete(id);

      if (i + 1 == unleaded95.length) {
        // console.log('Not Completed');
        return { PumpID: id };
      }
    }
  },
};

export const DELETE_DIESEL_10 = {
  type: FuelType,
  args: {
    PumpID: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { PumpID } = args;

    const diesel10 = await Diesel10.find({
      where: { PumpID: PumpID },
    });

    for (var i = 0; i <= diesel10.length + 1; i++) {
      let id = diesel10[i].ID;

      await Diesel10.delete(id);

      if (i + 1 == diesel10.length) {
        // console.log('Not Completed');
        return { PumpID: id };
      }
    }
  },
};
