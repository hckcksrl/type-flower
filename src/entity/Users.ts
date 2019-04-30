import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Images } from "./Image";
import { Librarys } from "./Librarys";
import { Likes } from "./Likes";
import { Comment } from "./Comment";
import { Recent } from "./Recent";

@Entity({ name: "users" })
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "integer", unique: true })
  userid: number;

  @Column({ type: "varchar", unique: true })
  nickname: string;

  @OneToMany(type => Librarys, librarys => librarys.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: true
  })
  librarys: Librarys[];

  @OneToMany(type => Likes, like => like.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: true
  })
  like: Likes[];

  @OneToMany(type => Comment, comment => comment.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: true
  })
  comment: Comment[];

  @OneToMany(type => Recent, recent => recent.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: true
  })
  recent: Recent[];

  @CreateDateColumn()
  createUser: string;

  @UpdateDateColumn()
  updateUser: string;
}
