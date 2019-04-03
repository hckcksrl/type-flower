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

  @Column({ type: "varchar", nullable: false, unique: true })
  email: string;

  @Column({ type: "varchar", nullable: false })
  password: string;

  @OneToMany(type => Images, images => images.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  images: Images[];

  @OneToMany(type => Librarys, librarys => librarys.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  librarys: Librarys[];

  @OneToMany(type => Likes, like => like.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  like: Likes[];

  @OneToMany(type => Comment, comment => comment.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  comment: Comment[];

  @OneToMany(type => Recent, recent => recent.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  recent: Recent[];

  @CreateDateColumn()
  createUser: string;

  @UpdateDateColumn()
  updateUser: string;
}
