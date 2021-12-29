import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity({name: 'info'})
export class UserEntity {
 @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 30 ,name: 'first_name'})
  firstName: string;

  @Column({name: 'last_name'})
  lastName: string;

  @Column({name: 'email',unique: true})
  email: string;
}
