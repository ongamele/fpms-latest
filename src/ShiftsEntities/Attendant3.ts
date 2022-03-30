import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attendant3 extends BaseEntity {
  @PrimaryGeneratedColumn()
  ID!: number;

  @Column()
  FirstName!: string;

  @Column()
  LastName!: string;

  @Column()
  TagID!: string;

  @Column()
  Days!: string;

  @Column()
  Shifts!: string;

  @Column()
  Start!: string;

  @Column()
  End!: string;

  @Column()
  ClockIn!: string;

  @Column()
  ClockOut!: string;

  @Column()
  Pumps!: string;

  @Column()
  Reason!: string;

  @Column()
  Code!: string;

  @Column()
  Min!: string;

  @Column()
  Adj!: string;

  @Column()
  Pay_hrs!: string;

  @Column()
  Due_date!: string;
}
