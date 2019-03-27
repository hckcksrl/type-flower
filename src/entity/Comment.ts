import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  OneToMany
} from "typeorm";
import { Flowers } from "./Flowers";
import { Images } from "./Image";

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @ManyToOne(type => Flowers, flowers => flowers.id)
  flowers: Flowers;

  @ManyToOne(type => Images, images => images.id)
  images: Images;

  @OneToMany(type => Comment, incomment => incomment.id)
  incomment: Comment[];
}
