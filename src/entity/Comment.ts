import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  RelationCount,
  JoinColumn
} from "typeorm";
import { Flowers } from "./Flowers";
import { Images } from "./Image";
import { Users } from "./Users";
import { Likes } from "./Likes";

@Entity({ name: "comment" })
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  comment: string;

  @ManyToOne(type => Users, users => users.id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    cascade: true,
    nullable: false
  })
  users: Users;

  @ManyToOne(type => Flowers, flowers => flowers.id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    cascade: true,
    nullable: true
  })
  flowers: Flowers;

  @OneToMany(type => Comment, incomment => incomment.id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    cascade: true,
    nullable: true
  })
  @JoinColumn({ name: "parentCommentId" })
  incomment: Comment[];

  @ManyToOne(type => Comment, parentcomment => parentcomment.id, {
    onDelete: "CASCADE",
    cascade: true,
    nullable: true
  })
  parentComment: Comment;

  @OneToMany(type => Likes, likes => likes.id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    cascade: true,
    nullable: true
  })
  likes: Likes[];

  @CreateDateColumn()
  createComment: string;

  @UpdateDateColumn()
  updateComment: string;
}
