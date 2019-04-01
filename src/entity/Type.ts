import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from "typeorm";
import { Flowers } from "./Flowers";

@Entity({ name: "type" })
export class Type extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  type: string;

  @OneToMany(type => Flowers, flowers => flowers.id)
  flowers: Flowers[];
}
