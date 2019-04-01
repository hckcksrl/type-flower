import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Users } from "./Users";
import { Flowers } from "./Flowers";

@Entity({ name: "images" })
export class Images extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  image: string;

  @Column({ type: "integer", nullable: false, default: 0 })
  hits: number;

  @ManyToOne(type => Users, users => users.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  users: Users;

  @ManyToMany(type => Flowers, flowers => flowers.id, {
    cascade: true,
    onDelete: "CASCADE"
  })
  @JoinTable()
  flowers: Flowers[];

  @CreateDateColumn()
  createImage: string;

  @UpdateDateColumn()
  updateImage: string;
}
