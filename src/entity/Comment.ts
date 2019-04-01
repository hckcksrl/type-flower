import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from "typeorm";
import { Flowers } from "./Flowers";
import { Images } from "./Image";
import { Users } from "./Users";

@Entity({ name: "comment" })
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  comment: string;

  @ManyToOne(type => Users, users => users.id, {
    onDelete: "CASCADE",
    cascade: true
  })
  users: Users;

  @ManyToOne(type => Flowers, flowers => flowers.id, {
    onDelete: "CASCADE",
    cascade: true
  })
  flowers: Flowers;

  @ManyToOne(type => Images, images => images.id, {
    onDelete: "CASCADE",
    cascade: true
  })
  images: Images;

  @ManyToOne(type => Comment, incomment => incomment.id, {
    onDelete: "CASCADE",
    cascade: true
  })
  incomment: Comment;
}
