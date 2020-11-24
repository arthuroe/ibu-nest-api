import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Patient {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public address: string;
}

export default Patient;
