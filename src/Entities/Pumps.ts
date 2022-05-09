import { BaseEntity, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Unleaded93 } from './Unleaded93';
import { Unleaded95 } from './Unleaded95';
import { Diesel10 } from './Diesel10';

@Entity()
export class Pumps extends BaseEntity {
  @PrimaryGeneratedColumn()
  PumpID!: string;

  @OneToMany(() => Unleaded95, (unleaded95: Unleaded95) => unleaded95.pumps) // specify inverse side as a second parameter
  unleaded95: Unleaded95;

  @OneToMany(() => Unleaded93, (unleaded93: Unleaded93) => unleaded93.pumps) // specify inverse side as a second parameter
  unleaded93: Unleaded93;

  @OneToMany(() => Diesel10, (diesel10: Diesel10) => diesel10.pumps) // specify inverse side as a second parameter
  diesel10: Diesel10;
}
