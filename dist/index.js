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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const Schema_1 = require("./Schema");
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
//Time Table Entities
const Employees_1 = require("./Entities/Employees");
const Shifts_1 = require("./Entities/Shifts");
const MonthRange_1 = require("./Entities/MonthRange");
const WetstockMonthRange_1 = require("./Entities/WetstockMonthRange");
const Pumps_1 = require("./Entities/Pumps");
const Unleaded93_1 = require("./Entities/Unleaded93");
const Unleaded95_1 = require("./Entities/Unleaded95");
const Diesel10_1 = require("./Entities/Diesel10");
const Tanks_1 = require("./Entities/Tanks");
const Unleaded93Tank_1 = require("./Entities/Unleaded93Tank");
const Unleaded95Tank_1 = require("./Entities/Unleaded95Tank");
const Diesel10Tank_1 = require("./Entities/Diesel10Tank");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, typeorm_1.createConnection)({
        type: 'mysql',
        host: 'dbfpms.cxcxvgzikyks.us-east-2.rds.amazonaws.com',
        port: 3306,
        database: 'timetables',
        username: 'pcsglobalFPMSDB',
        password: 'pcsg1234',
        // logging: true,
        synchronize: false,
        insecureAuth: true,
        entities: [
            Employees_1.Employees,
            Shifts_1.Shifts,
            MonthRange_1.MonthRange,
            WetstockMonthRange_1.WetstockMonthRange,
            Pumps_1.Pumps,
            Unleaded93_1.Unleaded93,
            Unleaded95_1.Unleaded95,
            Diesel10_1.Diesel10,
            Tanks_1.Tanks,
            Unleaded93Tank_1.Unleaded93Tank,
            Unleaded95Tank_1.Unleaded95Tank,
            Diesel10Tank_1.Diesel10Tank,
        ],
    });
    const PORT = process.env.PORT || 3001;
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
        schema: Schema_1.schema,
        graphiql: true,
    }));
    app.listen(PORT, () => {
        console.log('SERVER RUNNING ON PORT 3001');
    });
});
main().catch((err) => {
    console.log(err);
});
