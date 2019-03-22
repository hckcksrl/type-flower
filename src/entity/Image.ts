import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  ManyToMany,
  JoinTable
} from "typeorm";
import { Users } from "./Users";
import { Flowers } from "./Flowers";
import { Flower_Image } from "./Flower_Image";

@Entity({ name: "images" })
export class Images extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  image: string;

  @ManyToOne(type => Users, users => users.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  users: Users;

  @ManyToOne(type => Flower_Image, flower_image => flower_image.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  flower_image: Flower_Image[];
}
