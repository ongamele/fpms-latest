import { GraphQLID, GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import { TankFuelType } from '../TypeDefs/TankFuelType';
import { Unleaded93Tank } from '../../Entities/Unleaded93Tank';
import { Unleaded95Tank } from '../../Entities/Unleaded95Tank';
import { Diesel10Tank } from '../../Entities/Diesel10Tank';

export const CREATE_TANK_READINGS = {
  type: TankFuelType,
  args: {
    TankName: { type: GraphQLString },
  },

  async resolve(parent: any, args: any) {
    const { TankName } = args;
    for (var i = 31; i >= 1; i--) {
      await Unleaded93Tank.insert({
        TankID: TankName,
        Number: i,
      });

      await Unleaded95Tank.insert({
        TankID: TankName,
        Number: i,
      });

      await Diesel10Tank.insert({
        TankID: TankName,
        Number: i,
      });
    }

    return Unleaded93Tank.find();
  },
};

export const UPDATE_UNLEADED_93_TANK_READINGS = {
  type: TankFuelType,
  args: {
    id: { type: GraphQLID },
    readings: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { id, readings } = args;

    const FuelReadings = await Unleaded93Tank.update(id, {
      Readings: readings,
    });
    return FuelReadings;
  },
};

export const UPDATE_UNLEADED_95_TANK_READINGS = {
  type: TankFuelType,
  args: {
    id: { type: GraphQLID },
    readings: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { id, readings } = args;

    const FuelReadings = await Unleaded95Tank.update(id, {
      Readings: readings,
    });
    return FuelReadings;
  },
};

export const UPDATE_DIESEL_10_TANK_READINGS = {
  type: TankFuelType,
  args: {
    id: { type: GraphQLID },
    readings: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { id, readings } = args;

    const FuelReadings = await Diesel10Tank.update(id, { Readings: readings });
    return FuelReadings;
  },
};

export const UPDATE_TANK_DATE = {
  type: TankFuelType,
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
      await Unleaded93Tank.update({ Number: number }, { Date: date });
      await Unleaded95Tank.update({ Number: number }, { Date: date });
      await Diesel10Tank.update({ Number: number }, { Date: date });
      number = number + 1;
    }
    return { successful: true, message: 'WET STOCK UPDATED' };
  },
};

export const DELETE_UNLEADED_93_TANK = {
  type: TankFuelType,
  args: {
    TankID: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { TankID } = args;

    const unleaded93Tank = await Unleaded93Tank.find({
      where: { TankID: TankID },
    });

    for (var i = 0; i <= unleaded93Tank.length + 1; i++) {
      let id = unleaded93Tank[i].ID;

      await Unleaded93Tank.delete(id);

      if (i + 1 == unleaded93Tank.length) {
        // console.log('Not Completed');
        return { TankID: id };
      }
    }
  },
};

export const DELETE_UNLEADED_95_TANK = {
  type: TankFuelType,
  args: {
    TankID: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { TankID } = args;

    const unleaded95Tank = await Unleaded95Tank.find({
      where: { TankID: TankID },
    });

    for (var i = 0; i <= unleaded95Tank.length + 1; i++) {
      let id = unleaded95Tank[i].ID;

      await Unleaded95Tank.delete(id);

      if (i + 1 == unleaded95Tank.length) {
        // console.log('Not Completed');
        return { TankID: id };
      }
    }
  },
};

export const DELETE_DIESEL_10_TANK = {
  type: TankFuelType,
  args: {
    TankID: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { TankID } = args;

    const diesel10Tank = await Diesel10Tank.find({
      where: { TankID: TankID },
    });

    for (var i = 0; i <= diesel10Tank.length + 1; i++) {
      let id = diesel10Tank[i].ID;

      await Diesel10Tank.delete(id);

      if (i + 1 == diesel10Tank.length) {
        // console.log('Not Completed');
        return { TankID: id };
      }
    }
  },
};
