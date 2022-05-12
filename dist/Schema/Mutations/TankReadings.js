"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_DIESEL_10_TANK = exports.DELETE_UNLEADED_95_TANK = exports.DELETE_UNLEADED_93_TANK = exports.UPDATE_TANK_DATE = exports.UPDATE_DIESEL_10_TANK_READINGS = exports.UPDATE_UNLEADED_95_TANK_READINGS = exports.UPDATE_UNLEADED_93_TANK_READINGS = exports.CREATE_TANK_READINGS = void 0;
const graphql_1 = require("graphql");
const TankFuelType_1 = require("../TypeDefs/TankFuelType");
const Unleaded93Tank_1 = require("../../Entities/Unleaded93Tank");
const Unleaded95Tank_1 = require("../../Entities/Unleaded95Tank");
const Diesel10Tank_1 = require("../../Entities/Diesel10Tank");
exports.CREATE_TANK_READINGS = {
    type: TankFuelType_1.TankFuelType,
    args: {
        TankName: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { TankName } = args;
            for (var i = 31; i >= 1; i--) {
                yield Unleaded93Tank_1.Unleaded93Tank.insert({
                    TankID: TankName,
                    Number: i,
                });
                yield Unleaded95Tank_1.Unleaded95Tank.insert({
                    TankID: TankName,
                    Number: i,
                });
                yield Diesel10Tank_1.Diesel10Tank.insert({
                    TankID: TankName,
                    Number: i,
                });
            }
            return Unleaded93Tank_1.Unleaded93Tank.find();
        });
    },
};
exports.UPDATE_UNLEADED_93_TANK_READINGS = {
    type: TankFuelType_1.TankFuelType,
    args: {
        id: { type: graphql_1.GraphQLID },
        readings: { type: graphql_1.GraphQLInt },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, readings } = args;
            const FuelReadings = yield Unleaded93Tank_1.Unleaded93Tank.update(id, {
                Readings: readings,
            });
            return FuelReadings;
        });
    },
};
exports.UPDATE_UNLEADED_95_TANK_READINGS = {
    type: TankFuelType_1.TankFuelType,
    args: {
        id: { type: graphql_1.GraphQLID },
        readings: { type: graphql_1.GraphQLInt },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, readings } = args;
            const FuelReadings = yield Unleaded95Tank_1.Unleaded95Tank.update(id, {
                Readings: readings,
            });
            return FuelReadings;
        });
    },
};
exports.UPDATE_DIESEL_10_TANK_READINGS = {
    type: TankFuelType_1.TankFuelType,
    args: {
        id: { type: graphql_1.GraphQLID },
        readings: { type: graphql_1.GraphQLInt },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, readings } = args;
            const FuelReadings = yield Diesel10Tank_1.Diesel10Tank.update(id, { Readings: readings });
            return FuelReadings;
        });
    },
};
exports.UPDATE_TANK_DATE = {
    type: TankFuelType_1.TankFuelType,
    args: {
        MonthStart: { type: graphql_1.GraphQLString },
        MonthEnd: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { MonthStart, MonthEnd } = args;
            var mStart = new Date(MonthStart);
            var mEnd = new Date(MonthEnd);
            var number = 1;
            // loop for every day
            for (var dayDate = mStart; dayDate <= mEnd; dayDate.setDate(dayDate.getDate() + 1)) {
                const date = dayDate.toISOString().substr(0, 10);
                yield Unleaded93Tank_1.Unleaded93Tank.update({ Number: number }, { Date: date });
                yield Unleaded95Tank_1.Unleaded95Tank.update({ Number: number }, { Date: date });
                yield Diesel10Tank_1.Diesel10Tank.update({ Number: number }, { Date: date });
                number = number + 1;
            }
            return { successful: true, message: 'WET STOCK UPDATED' };
        });
    },
};
exports.DELETE_UNLEADED_93_TANK = {
    type: TankFuelType_1.TankFuelType,
    args: {
        TankID: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { TankID } = args;
            const unleaded93Tank = yield Unleaded93Tank_1.Unleaded93Tank.find({
                where: { TankID: TankID },
            });
            for (var i = 0; i <= unleaded93Tank.length + 1; i++) {
                let id = unleaded93Tank[i].ID;
                yield Unleaded93Tank_1.Unleaded93Tank.delete(id);
                if (i + 1 == unleaded93Tank.length) {
                    // console.log('Not Completed');
                    return { TankID: id };
                }
            }
        });
    },
};
exports.DELETE_UNLEADED_95_TANK = {
    type: TankFuelType_1.TankFuelType,
    args: {
        TankID: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { TankID } = args;
            const unleaded95Tank = yield Unleaded95Tank_1.Unleaded95Tank.find({
                where: { TankID: TankID },
            });
            for (var i = 0; i <= unleaded95Tank.length + 1; i++) {
                let id = unleaded95Tank[i].ID;
                yield Unleaded95Tank_1.Unleaded95Tank.delete(id);
                if (i + 1 == unleaded95Tank.length) {
                    // console.log('Not Completed');
                    return { TankID: id };
                }
            }
        });
    },
};
exports.DELETE_DIESEL_10_TANK = {
    type: TankFuelType_1.TankFuelType,
    args: {
        TankID: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { TankID } = args;
            const diesel10Tank = yield Diesel10Tank_1.Diesel10Tank.find({
                where: { TankID: TankID },
            });
            for (var i = 0; i <= diesel10Tank.length + 1; i++) {
                let id = diesel10Tank[i].ID;
                yield Diesel10Tank_1.Diesel10Tank.delete(id);
                if (i + 1 == diesel10Tank.length) {
                    // console.log('Not Completed');
                    return { TankID: id };
                }
            }
        });
    },
};
