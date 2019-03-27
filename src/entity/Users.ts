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
import { Like } from "./Like";

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

  @OneToMany(type => Like, like => like.id)
  like: Like[];

  @CreateDateColumn()
  createUser: string;

  @UpdateDateColumn()
  updateUser: string;
}
