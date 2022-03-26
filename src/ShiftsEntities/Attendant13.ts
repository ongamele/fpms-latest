import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attendant13 extends BaseEntity {
  @PrimaryGeneratedColumn()
  ID!: number;

  @Column()
  FirstName!: string;

  @Column()
  LastName!: string;

  @Column()
  TagID!: string;

  @Column()
  Days!: string;

  @Column()
  Pumps!: string;

  @Column()
  Shifts!: Date;

  @Column()
  Start!: number;

  @Column()
  End!: string;

  @Column()
  ClockIn!: string;

  @Column()
  ClockOut!: string;
}
