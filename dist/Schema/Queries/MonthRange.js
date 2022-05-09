"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_WETSTOCK_MONTH_RANGE = exports.GET_MONTH_RANGE = void 0;
const graphql_1 = require("graphql");
const MonthRangeType_1 = require("../TypeDefs/MonthRangeType");
const MonthRange_1 = require("../../Entities/MonthRange");
const WetstockMonthRange_1 = require("../../Entities/WetstockMonthRange");
exports.GET_MONTH_RANGE = {
    type: new graphql_1.GraphQLList(MonthRangeType_1.MonthRangeType),
    resolve() {
        return MonthRange_1.MonthRange.find();
    },
};
exports.GET_WETSTOCK_MONTH_RANGE = {
    type: new graphql_1.GraphQLList(MonthRangeType_1.MonthRangeType),
    resolve() {
        return WetstockMonthRange_1.WetstockMonthRange.find();
    },
};
