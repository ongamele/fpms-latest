"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsType = void 0;
const graphql_1 = require("graphql");
exports.StatisticsType = new graphql_1.GraphQLObjectType({
    name: 'Statistics',
    fields: () => ({
        UniqueID: { type: graphql_1.GraphQLInt },
        EventTime: { type: graphql_1.GraphQLString },
        Service_stat_LongWait_Day_Total: { type: graphql_1.GraphQLInt },
        Service_stat_U93_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_U95_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_Diesel_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_Account_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_AirTyre_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_Bakkie_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_Bike_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_Breakdown_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_Car_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_Card_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_Cash_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_DrivebyServices_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_Fleetcard_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_Litres_Daily: { type: graphql_1.GraphQLFloat },
        Service_stat_Missed_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_noTRX_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_Oil_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_OtherServices_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_SmallCar_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_SUV_Daily: { type: graphql_1.GraphQLInt },
        Service_stat_Taxi_Daily: { type: graphql_1.GraphQLInt },
    }),
});
