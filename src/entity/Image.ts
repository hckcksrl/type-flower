import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany
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

  @OneToMany(type => Flower_Image, flower_image => flower_image.id, {
    cascade: true,
    onDelete: "CASCADE"
  })
  flower_image: Flower_Image[];
  // @ManyToMany(type => Flowers, flowers => flowers.id, {
  //   cascade: true,
  //   onDelete: "CASCADE"
  // })
  // @JoinTable()
  // flowers: Flowers[];
}
