import { BaseEntity } from "src/common/entity/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'post'})

export class PostEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 30 ,name: 'title'})
  title: string;

  @Column({name: 'content'})
  content: string;
}
