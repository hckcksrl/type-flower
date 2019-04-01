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

@Entity({ name: "users" })
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false, unique: true })
  email: string;

  @Column({ type: "varchar", nullable: false })
  password: string;

  @OneToMany(type => Images, images => images.id)
  images: Images[];

  @OneToMany(type => Librarys, librarys => librarys.id)
  librarys: Librarys[];

  @OneToMany(type => Likes, like => like.id)
  like: Likes[];

  @OneToMany(type => Comment, comment => comment.id)
  comment: Comment[];

  @CreateDateColumn()
  createUser: string;

  @UpdateDateColumn()
  updateUser: string;
}
