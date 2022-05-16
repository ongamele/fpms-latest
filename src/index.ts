import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Schema';
import cors from 'cors';
import { createConnection } from 'typeorm';

//Time Table Entities
import { Employees } from './Entities/Employees';
import { Shifts } from './Entities/Shifts';
import { MonthRange } from './Entities/MonthRange';
import { WetstockMonthRange } from './Entities/WetstockMonthRange';
import { Pumps } from './Entities/Pumps';
import { Unleaded93 } from './Entities/Unleaded93';
import { Unleaded95 } from './Entities/Unleaded95';
import { Diesel10 } from './Entities/Diesel10';
import { Tanks } from './Entities/Tanks';
import { Unleaded93Tank } from './Entities/Unleaded93Tank';
import { Unleaded95Tank } from './Entities/Unleaded95Tank';
import { Diesel10Tank } from './Entities/Diesel10Tank';
import { Leaves } from './Entities/Leaves';

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
      Employees,
      Shifts,
      MonthRange,
      WetstockMonthRange,
      Pumps,
      Unleaded93,
      Unleaded95,
      Diesel10,
      Tanks,
      Unleaded93Tank,
      Unleaded95Tank,
      Diesel10Tank,
      Leaves,
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
