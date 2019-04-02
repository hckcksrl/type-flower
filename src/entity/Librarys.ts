import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";
import { Users } from "./Users";
import { SaveFlower } from "./SaveFlower";

@Entity({ name: "librarys" })
export class Librarys extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  name: string;

  @ManyToOne(type => Users, users => users.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  users: Users;

  @OneToMany(type => SaveFlower, saveFlower => saveFlower.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  saveFlower: SaveFlower[];

  @CreateDateColumn()
  createLibrary: string;

  @UpdateDateColumn()
  updateLibrary: string;
}
