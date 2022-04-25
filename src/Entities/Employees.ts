import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Shifts } from './Shifts';

@Entity()
export class Employees extends BaseEntity {
  @PrimaryGeneratedColumn()
  EmployeeID!: number;

  @Column()
  FirstName!: string;

  @Column()
  LastName!: string;

  @Column()
  IdNumber!: string;

  @Column()
  CellNumber!: string;

  @Column()
  Gender!: string;

  @Column()
  Position!: string;

  @Column()
  DateOfEmployment!: string;

  @Column()
  Password!: string;

  @Column()
  SecurityQuestion!: string;

  @Column()
  Photo!: string;

  @Column()
  Answer!: string;

  @OneToMany(() => Shifts, (shifts: Shifts) => shifts.employees) // specify inverse side as a second parameter
  shifts: Shifts;
}
