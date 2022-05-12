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
export class Leaves extends BaseEntity {
  @PrimaryGeneratedColumn()
  ID!: number;
  @Column()
  EmployeeID!: number;

  @Column()
  Date!: string;

  @Column()
  Leave!: string;

  @Column()
  ShiftID!: number;
}
