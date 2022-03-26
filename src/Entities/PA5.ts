import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PA5 extends BaseEntity {
  @PrimaryGeneratedColumn()
  UniqueID!: number;

  @Column()
  FirstName!: string;

  @Column()
  LastName!: string;

  @Column()
  TagID!: number;

  @Column()
  Average_Response_Time!: number;

  @Column()
  TRX_Today!: number;

  @Column()
  WorkHour_Today!: number;
}
