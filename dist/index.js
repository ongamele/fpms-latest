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
/*import { Statistics } from './Entities/Statistics';
import { Constants } from './Entities/Constants';
import { Pump5 } from './Entities/Pump5';
import { PA1 } from './Entities/PA1';
import { PA2 } from './Entities/PA2';
import { PA3 } from './Entities/PA3';
import { PA4 } from './Entities/PA4';
import { PA5 } from './Entities/PA5';
import { PA6 } from './Entities/PA6';
import { PA7 } from './Entities/PA7';
import { PA8 } from './Entities/PA8';
import { PA9 } from './Entities/PA9';
import { PA10 } from './Entities/PA10';
import { PA11 } from './Entities/PA11';
import { PA12 } from './Entities/PA12';
import { PA13 } from './Entities/PA13';
import { PA14 } from './Entities/PA14';
import { PA15 } from './Entities/PA15';
import { General } from './Entities/General';*/
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
const Attendants_1 = require("./Entities/Attendants");
const Shifts_1 = require("./Entities/Shifts");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    /*await createConnection({
      type: 'mysql',
      host: 'dbfpms.cxcxvgzikyks.us-east-2.rds.amazonaws.com',
      port: 3306,
      database: 'sys',
      username: 'pcsglobalFPMSDB',
      password: 'pcsg1234',
      // logging: true,
      synchronize: false,
      entities: [
        Statistics,
        Constants,
        Pump5,
        PA1,
        PA2,
        PA3,
        PA4,
        PA5,
        PA6,
        PA7,
        PA8,
        PA9,
        PA10,
        PA11,
        PA12,
        PA13,
        PA14,
        PA15,
        General,
      ],
    });*/
    yield (0, typeorm_1.createConnection)({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        database: 'sys',
        username: 'root',
        password: 'paragongeekssql',
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
            Attendants_1.Attendants,
            Shifts_1.Shifts,
        ],
    });
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
        schema: Schema_1.schema,
        graphiql: true,
    }));
    app.listen(3001, () => {
        console.log('SERVER RUNNING ON PORT 3001');
    });
});
main().catch((err) => {
    console.log(err);
});
