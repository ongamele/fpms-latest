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
exports.UPDATE_WETSTOCK_MONTH_RANGE = exports.UPDATE_MONTH_RANGE = void 0;
const graphql_1 = require("graphql");
const MonthRangeType_1 = require("../TypeDefs/MonthRangeType");
const MonthRange_1 = require("../../Entities/MonthRange");
const WetstockMonthRange_1 = require("../../Entities/WetstockMonthRange");
exports.UPDATE_MONTH_RANGE = {
    type: MonthRangeType_1.MonthRangeType,
    args: {
        MonthStart: { type: graphql_1.GraphQLString },
        MonthEnd: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { MonthStart, MonthEnd } = args;
            const id = 1;
            const Range = yield MonthRange_1.MonthRange.update(id, {
                MonthStart: MonthStart,
                MonthEnd: MonthEnd,
            });
            return Range;
        });
    },
};
exports.UPDATE_WETSTOCK_MONTH_RANGE = {
    type: MonthRangeType_1.MonthRangeType,
    args: {
        MonthStart: { type: graphql_1.GraphQLString },
        MonthEnd: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { MonthStart, MonthEnd } = args;
            const id = 1;
            const Range = yield WetstockMonthRange_1.WetstockMonthRange.update(id, {
                MonthStart: MonthStart,
                MonthEnd: MonthEnd,
            });
            return Range;
        });
    },
};
