import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class General extends BaseEntity {
  @PrimaryGeneratedColumn()
  UniqueID!: number;

  @Column()
  Avg_Response_Time_Sec!: number;

  @Column()
  TodayCount!: number;

  @Column()
  ThisMonthCount!: number;
}
