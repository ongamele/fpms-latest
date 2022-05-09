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
exports.UPDATE_WETSTOCK_DATE = exports.UPDATE_DIESEL_10_READINGS = exports.UPDATE_UNLEADED_95_READINGS = exports.UPDATE_UNLEADED_93_READINGS = exports.CREATE_FUEL_READINGS = void 0;
const graphql_1 = require("graphql");
const FuelType_1 = require("../TypeDefs/FuelType");
const Unleaded93_1 = require("../../Entities/Unleaded93");
const Unleaded95_1 = require("../../Entities/Unleaded95");
const Diesel10_1 = require("../../Entities/Diesel10");
exports.CREATE_FUEL_READINGS = {
    type: FuelType_1.FuelType,
    args: {
        PumpName: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { PumpName } = args;
            for (var i = 31; i >= 1; i--) {
                yield Unleaded93_1.Unleaded93.insert({
                    PumpID: PumpName,
                    Number: i,
                });
                yield Unleaded95_1.Unleaded95.insert({
                    PumpID: PumpName,
                    Number: i,
                });
                yield Diesel10_1.Diesel10.insert({
                    PumpID: PumpName,
                    Number: i,
                });
            }
            return Unleaded93_1.Unleaded93.find();
        });
    },
};
exports.UPDATE_UNLEADED_93_READINGS = {
    type: FuelType_1.FuelType,
    args: {
        id: { type: graphql_1.GraphQLID },
        readings: { type: graphql_1.GraphQLInt },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, readings } = args;
            const FuelReadings = yield Unleaded93_1.Unleaded93.update(id, { Readings: readings });
            return FuelReadings;
        });
    },
};
exports.UPDATE_UNLEADED_95_READINGS = {
    type: FuelType_1.FuelType,
    args: {
        id: { type: graphql_1.GraphQLID },
        readings: { type: graphql_1.GraphQLInt },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, readings } = args;
            const FuelReadings = yield Unleaded95_1.Unleaded95.update(id, { Readings: readings });
            return FuelReadings;
        });
    },
};
exports.UPDATE_DIESEL_10_READINGS = {
    type: FuelType_1.FuelType,
    args: {
        id: { type: graphql_1.GraphQLID },
        readings: { type: graphql_1.GraphQLInt },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, readings } = args;
            const FuelReadings = yield Diesel10_1.Diesel10.update(id, { Readings: readings });
            return FuelReadings;
        });
    },
};
exports.UPDATE_WETSTOCK_DATE = {
    type: FuelType_1.FuelType,
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
                yield Unleaded93_1.Unleaded93.update({ Number: number }, { Date: date });
                yield Unleaded95_1.Unleaded95.update({ Number: number }, { Date: date });
                yield Diesel10_1.Diesel10.update({ Number: number }, { Date: date });
                number = number + 1;
            }
            return { successful: true, message: 'WET STOCK UPDATED' };
        });
    },
};
