import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from "typeorm";
import { Flowers } from "./Flowers";

@Entity({ name: "collection" })
export class Collection extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  name: string;

  @ManyToMany(type => Flowers, flowers => flowers.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinTable()
  flowers: Flowers[];

  @Column({ type: "boolean", default: false, nullable: false })
  view: boolean;
}
