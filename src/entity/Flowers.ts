import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from "typeorm";

import { Images } from "./Image";
import { Type } from "./Type";
import { SaveFlower } from "./SaveFlower";

@Entity({ name: "flowers" })
export class Flowers extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  image: string;

  @Column({ type: "varchar", nullable: false })
  name: string;

  @Column({ type: "varchar", nullable: false })
  content: string;

  @Column({ type: "varchar", nullable: false, default: "spring" })
  weather: string;

  @Column({ type: "integer", nullable: false, default: 0 })
  hits: number;

  @ManyToOne(type => Type, type => type.id, {
    cascade: true,
    onDelete: "CASCADE"
  })
  type: Type;

  @ManyToMany(type => Images, images => images.id, {
    cascade: true,
    onDelete: "CASCADE"
  })
  images: Images[];

  @OneToMany(type => SaveFlower, saveFlower => saveFlower.id)
  saveFlower: SaveFlower[];

  @CreateDateColumn()
  createFlower: string;

  @UpdateDateColumn()
  updateFlower: string;
}
