import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Schema';
import cors from 'cors';
import { createConnection } from 'typeorm';
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
import { Attendant1 } from './ShiftsEntities/Attendant1';
import { Attendant2 } from './ShiftsEntities/Attendant2';
import { Attendant3 } from './ShiftsEntities/Attendant3';
import { Attendant4 } from './ShiftsEntities/Attendant4';
import { Attendant5 } from './ShiftsEntities/Attendant5';
import { Attendant6 } from './ShiftsEntities/Attendant6';
import { Attendant7 } from './ShiftsEntities/Attendant7';
import { Attendant8 } from './ShiftsEntities/Attendant8';
import { Attendant9 } from './ShiftsEntities/Attendant9';
import { Attendant10 } from './ShiftsEntities/Attendant10';
import { Attendant11 } from './ShiftsEntities/Attendant11';
import { Attendant12 } from './ShiftsEntities/Attendant12';
import { Attendant13 } from './ShiftsEntities/Attendant13';
import { Attendant14 } from './ShiftsEntities/Attendant14';
import { Attendant15 } from './ShiftsEntities/Attendant15';
import { Attendant16 } from './ShiftsEntities/Attendant16';
import { Attendants } from './Entities/Attendants';
import { Shifts } from './Entities/Shifts';

const main = async () => {
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

  await createConnection({
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
      Attendant1,
      Attendant2,
      Attendant3,
      Attendant4,
      Attendant5,
      Attendant6,
      Attendant7,
      Attendant8,
      Attendant9,
      Attendant10,
      Attendant11,
      Attendant12,
      Attendant13,
      Attendant14,
      Attendant15,
      Attendant16,
      Attendants,
      Shifts,
    ],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log('SERVER RUNNING ON PORT 3001');
  });
};

main().catch((err) => {
  console.log(err);
});
