import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Users } from "./Users";
import { Flowers } from "./Flowers";

@Entity({ name: "recent" })
export class Recent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Users, users => users.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: false
  })
  users: Users;

  @ManyToOne(type => Flowers, flowers => flowers.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: false
  })
  flowers: Flowers;

  @CreateDateColumn()
  createRecent: string;

  @UpdateDateColumn()
  updateRecent: string;
}
