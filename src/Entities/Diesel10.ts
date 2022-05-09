import {
  BaseEntity,
  OneToOne,
  ManyToOne,
  JoinColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Pumps } from './Pumps';

@Entity()
export class Diesel10 extends BaseEntity {
  @PrimaryGeneratedColumn()
  ID!: number;

  @Column()
  PumpID!: string;

  @Column()
  Readings!: number;

  @Column()
  Date!: string;

  @Column()
  Number!: number;

  @ManyToOne(() => Pumps, (pumps: Pumps) => pumps.diesel10) // specify inverse side as a second parameter
  @JoinColumn({ name: 'PumpID' })
  pumps: Pumps;
}
