import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany
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
    cascade: true,
    nullable: false
  })
  users: Users;

  @ManyToOne(type => Flowers, flowers => flowers.id, {
    onDelete: "CASCADE",
    cascade: true,
    nullable: true
  })
  flowers: Flowers;

  @OneToMany(type => Comment, incomment => incomment.id, {
    onDelete: "CASCADE",
    cascade: true,
    nullable: true
  })
  incomment: Comment;
}
