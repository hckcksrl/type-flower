import { Entity, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Users } from "./Users";
import { Flowers } from "./Flowers";
import { Images } from "./Image";
import { Comment } from "./Comment";

@Entity({ name: "likes" })
export class Likes extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Users, users => users.id)
  users: Users;

  @ManyToOne(type => Flowers, flowers => flowers.id)
  flowers: Flowers;

  @ManyToOne(type => Comment, comment => comment.id)
  comment: Comment;
}
