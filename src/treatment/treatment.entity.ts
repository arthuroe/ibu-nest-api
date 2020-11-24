import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Treatment {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;
}

export default Treatment;
