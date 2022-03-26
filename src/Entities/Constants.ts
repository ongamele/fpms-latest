import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity()
export class Constants extends BaseEntity {
  @PrimaryGeneratedColumn()
  UniqueID!: number;

  @Column()
  EventTime!: string;

  @Column()
  Fuel_Price_95!: number;

  @Column()
  Fuel_Price_93!: number;

  @Column()
  Fuel_Price_Diesel!: number;
}
