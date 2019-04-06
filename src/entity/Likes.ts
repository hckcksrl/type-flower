import { Entity, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Users } from "./Users";
import { Flowers } from "./Flowers";
import { Images } from "./Image";
import { Comment } from "./Comment";

@Entity({ name: "likes" })
export class Likes extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Users, users => users.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: false
  })
  users: Users;

  @ManyToOne(type => Flowers, flowers => flowers.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: true
  })
  flowers: Flowers;

  @ManyToOne(type => Comment, comment => comment.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: true
  })
  comment: Comment;
}
