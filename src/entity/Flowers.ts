import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinTable
} from "typeorm";

import { Images } from "./Image";
import { FlowerType } from "./FlowerType";
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

  @ManyToOne(type => FlowerType, flowerType => flowerType.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  flowerType: FlowerType;

  @OneToMany(type => Images, images => images.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  images: Images[];

  @OneToMany(type => SaveFlower, saveFlower => saveFlower.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  saveFlower: SaveFlower[];

  @CreateDateColumn()
  createFlower: string;

  @UpdateDateColumn()
  updateFlower: string;
}
