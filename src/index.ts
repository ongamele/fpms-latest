import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Schema';
import cors from 'cors';
import { createConnection } from 'typeorm';

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
import { Employees } from './Entities/Employees';
import { Shifts } from './Entities/Shifts';
import { MonthRange } from './Entities/MonthRange';

const main = async () => {
  await createConnection({
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
      Employees,
      Shifts,
      MonthRange,
    ],
  });

  const PORT = process.env.PORT || 3001;

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

  app.listen(PORT, () => {
    console.log('SERVER RUNNING ON PORT 3001');
  });
};

main().catch((err) => {
  console.log(err);
});
