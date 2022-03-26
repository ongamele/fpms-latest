import {
  BaseEntity,
  OneToOne,
  JoinColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Attendants } from './Attendants';

@Entity()
export class Shifts extends BaseEntity {
  @PrimaryGeneratedColumn()
  ID!: number;
  @Column()
  AttendantID!: string;
  @Column()
  Shift1!: string;
  @Column()
  Shift2!: string;
  @Column()
  Shift3!: string;
  @Column()
  Shift4!: string;
  @Column()
  Shift5!: string;
  @Column()
  Shift6!: string;
  @Column()
  Shift7!: string;
  @Column()
  Shift8!: string;
  @Column()
  Shift9!: string;
  @Column()
  Shift10!: string;
  @Column()
  Shift11!: string;
  @Column()
  Shift12!: string;
  @Column()
  Shift13!: string;
  @Column()
  Shift14!: string;
  @Column()
  Shift15!: string;
  @Column()
  Shift16!: string;
  @Column()
  Shift17!: string;
  @Column()
  Shift18!: string;
  @Column()
  Shift19!: string;
  @Column()
  Shift20!: string;
  @Column()
  Shift21!: string;
  @Column()
  Shift22!: string;
  @Column()
  Shift23!: string;
  @Column()
  Shift24!: string;
  @Column()
  Shift25!: string;
  @Column()
  Shift26!: string;
  @Column()
  Shift27!: string;
  @Column()
  Shift28!: string;
  @Column()
  Shift29!: string;
  @Column()
  Shift30!: string;
  @Column()
  Shift31!: string;

}
