import { BaseEntity, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Unleaded93Tank } from './Unleaded93Tank';
import { Unleaded95Tank } from './Unleaded95Tank';
import { Diesel10Tank } from './Diesel10Tank';

@Entity()
export class Tanks extends BaseEntity {
  @PrimaryGeneratedColumn()
  TankID!: string;

  @OneToMany(
    () => Unleaded95Tank,
    (unleaded95Tank: Unleaded95Tank) => unleaded95Tank.tanks
  ) // specify inverse side as a second parameter
  unleaded95Tank: Unleaded95Tank;

  @OneToMany(
    () => Unleaded93Tank,
    (unleaded93Tank: Unleaded93Tank) => unleaded93Tank.tanks
  ) // specify inverse side as a second parameter
  unleaded93Tank: Unleaded93Tank;

  @OneToMany(
    () => Diesel10Tank,
    (diesel10Tank: Diesel10Tank) => diesel10Tank.tanks
  ) // specify inverse side as a second parameter
  diesel10Tank: Diesel10Tank;
}
