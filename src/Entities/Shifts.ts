import {
  BaseEntity,
  OneToOne,
  ManyToOne,
  JoinColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Employees } from './Employees';

@Entity()
export class Shifts extends BaseEntity {
  @PrimaryGeneratedColumn()
  ID!: number;
  @Column()
  EmployeeID!: number;

  @Column()
  Start!: string;

  @Column()
  End!: string;

  @Column()
  Pumps!: string;

  @Column()
  Days!: string;

  @Column()
  ClockIn!: string;

  @Column()
  ClockOut!: string;

  @Column()
  Date!: string;

  @Column()
  Due_date!: string;

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
  Shift_number!: number;

  @ManyToOne(() => Employees, (employees: Employees) => employees.shifts) // specify inverse side as a second parameter
  @JoinColumn({ name: 'EmployeeID' })
  employees: Employees;
}
