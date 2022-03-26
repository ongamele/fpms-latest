import {
  BaseEntity,
  Column,
  Double,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity()
export class Statistics extends BaseEntity {
  @PrimaryGeneratedColumn()
  UniqueID!: number;

  @Column()
  EventTime!: Date;

  @Column()
  Service_stat_LongWait_Day_Total!: number;

  @Column()
  Service_stat_U93_Daily!: number;

  @Column()
  Service_stat_U95_Daily!: number;

  @Column()
  Service_stat_Diesel_Daily!: number;

  @Column()
  Service_stat_Account_Daily!: number;

  @Column()
  Service_stat_AirTyre_Daily!: number;

  @Column()
  Service_stat_Bakkie_Daily!: number;

  @Column()
  Service_stat_Bike_Daily!: number;

  @Column()
  Service_stat_Breakdown_Daily!: number;

  @Column()
  Service_stat_Car_Daily!: number;

  @Column()
  Service_stat_Card_Daily!: number;

  @Column()
  Service_stat_Cash_Daily!: number;

  @Column()
  Service_stat_DrivebyServices_Daily!: number;

  @Column()
  Service_stat_Fleetcard_Daily!: number;

  @Column()
  Service_stat_Litres_Daily!: number;

  @Column()
  Service_stat_Missed_Daily!: number;

  @Column()
  Service_stat_noTRX_Daily!: number;

  @Column()
  Service_stat_Oil_Daily!: number;

  @Column()
  Service_stat_OtherServices_Daily!: number;

  @Column()
  Service_stat_SmallCar_Daily!: number;

  @Column()
  Service_stat_SUV_Daily!: number;

  @Column()
  Service_stat_Taxi_Daily!: number;
}
