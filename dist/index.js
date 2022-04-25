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
const Attendant1_1 = require("./ShiftsEntities/Attendant1");
const Attendant2_1 = require("./ShiftsEntities/Attendant2");
const Attendant3_1 = require("./ShiftsEntities/Attendant3");
const Attendant4_1 = require("./ShiftsEntities/Attendant4");
const Attendant5_1 = require("./ShiftsEntities/Attendant5");
const Attendant6_1 = require("./ShiftsEntities/Attendant6");
const Attendant7_1 = require("./ShiftsEntities/Attendant7");
const Attendant8_1 = require("./ShiftsEntities/Attendant8");
const Attendant9_1 = require("./ShiftsEntities/Attendant9");
const Attendant10_1 = require("./ShiftsEntities/Attendant10");
const Attendant11_1 = require("./ShiftsEntities/Attendant11");
const Attendant12_1 = require("./ShiftsEntities/Attendant12");
const Attendant13_1 = require("./ShiftsEntities/Attendant13");
const Attendant14_1 = require("./ShiftsEntities/Attendant14");
const Attendant15_1 = require("./ShiftsEntities/Attendant15");
const Attendant16_1 = require("./ShiftsEntities/Attendant16");
const Employees_1 = require("./Entities/Employees");
const Shifts_1 = require("./Entities/Shifts");
const MonthRange_1 = require("./Entities/MonthRange");
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
            Attendant1_1.Attendant1,
            Attendant2_1.Attendant2,
            Attendant3_1.Attendant3,
            Attendant4_1.Attendant4,
            Attendant5_1.Attendant5,
            Attendant6_1.Attendant6,
            Attendant7_1.Attendant7,
            Attendant8_1.Attendant8,
            Attendant9_1.Attendant9,
            Attendant10_1.Attendant10,
            Attendant11_1.Attendant11,
            Attendant12_1.Attendant12,
            Attendant13_1.Attendant13,
            Attendant14_1.Attendant14,
            Attendant15_1.Attendant15,
            Attendant16_1.Attendant16,
            Employees_1.Employees,
            Shifts_1.Shifts,
            MonthRange_1.MonthRange,
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
