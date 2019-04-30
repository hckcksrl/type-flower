import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from "typeorm";
import { Flowers } from "./Flowers";

@Entity({ name: "collection" })
export class Collection extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  name: string;

  @OneToMany(type => Flowers, flowers => flowers.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  flowers: Flowers[];

  @Column({ type: "boolean", default: false })
  view: boolean;
}
