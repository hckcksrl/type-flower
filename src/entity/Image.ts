import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne
} from "typeorm";
import { Users } from "./Users";

@Entity({ name: "images" })
export class Images extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  image: string;

  @ManyToOne(type => Users, users => users.id)
  users: Users[];
}
