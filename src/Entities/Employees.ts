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

  @Column()
  ShoeSize!: number;

  @Column()
  TShirtSize!: string;

  @Column()
  JacketSize!: string;

  @Column()
  PantsSize!: number;

  @Column()
  Bank!: string;

  @Column()
  AccountNumber!: number;

  @Column()
  AccountType!: string;

  @Column()
  BranchCode!: string;

  @Column()
  StreetNumber!: string;

  @Column()
  StreetName!: string;

  @Column()
  Suburb!: string;

  @Column()
  City!: string;

  @Column()
  Code!: string;

  @Column()
  TaxNumber!: string;

  @OneToMany(() => Shifts, (shifts: Shifts) => shifts.employees) // specify inverse side as a second parameter
  shifts: Shifts;
}
