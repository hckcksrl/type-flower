import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Users } from "./Users";

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

  @CreateDateColumn()
  createLibrary: string;
}
