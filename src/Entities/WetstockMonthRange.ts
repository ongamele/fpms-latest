import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity()
export class WetstockMonthRange extends BaseEntity {
  @PrimaryGeneratedColumn()
  ID!: number;

  @Column()
  MonthStart!: string;

  @Column()
  MonthEnd!: string;
}
