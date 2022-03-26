import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Shifts } from './Shifts';

@Entity()
export class Attendants extends BaseEntity {
  @PrimaryGeneratedColumn()
  ID!: string;

  @Column()
  FirstName!: string;

  @Column()
  LastName!: string;

  @Column()
  EmployeeNumber!: string;

  @Column()
  DateOfBirth!: string;

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

  @OneToOne(() => Shifts, (shifts) => shifts.attendant)
  shifts: Shifts;
}
