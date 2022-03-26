import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pump5 extends BaseEntity {
  @PrimaryGeneratedColumn()
  UniqueID!: number;

  @Column()
  Client!: number;

  @Column()
  FirstName!: string;

  @Column()
  EntryTime!: string;

  @Column()
  TimerTransact!: number;

  @Column()
  TimerWait!: number;

  @Column()
  OutOfOrder!: number;

  @Column()
  TodayCount!: number;

  @Column()
  LongWaitCount!: number;
}
