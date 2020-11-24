import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Drug {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;
}

export default Drug;
