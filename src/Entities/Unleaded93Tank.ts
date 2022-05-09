import {
  BaseEntity,
  OneToOne,
  ManyToOne,
  JoinColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Tanks } from './Tanks';

@Entity()
export class Unleaded93Tank extends BaseEntity {
  @PrimaryGeneratedColumn()
  ID!: number;

  @Column()
  TankID!: string;

  @Column()
  Readings!: number;

  @Column()
  Date!: string;

  @Column()
  Number!: number;

  @ManyToOne(() => Tanks, (tanks: Tanks) => tanks.unleaded93Tank) // specify inverse side as a second parameter
  @JoinColumn({ name: 'TankID' })
  tanks: Tanks;
}
