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
  JoinTable,
  RelationCount
} from "typeorm";

import { Images } from "./Image";
import { FlowerType } from "./FlowerType";
import { SaveFlower } from "./SaveFlower";
import { Recent } from "./Recent";
import { Likes } from "./Likes";
import { Collection } from "./Collection";

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

  @Column({ type: "integer", nullable: false, default: 0 })
  hits: number;

  @ManyToOne(type => FlowerType, flowerType => flowerType.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: false
  })
  flowerType: FlowerType;

  @OneToMany(type => Images, images => images.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: true
  })
  images: Images[];

  @OneToMany(type => SaveFlower, saveFlower => saveFlower.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: true
  })
  saveFlower: SaveFlower[];

  @OneToMany(type => Recent, recent => recent.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: true
  })
  recent: Recent[];

  @OneToMany(type => Likes, likes => likes.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: true
  })
  likes: Likes[];

  @ManyToMany(type => Collection, collection => collection.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  collection: Collection[];
  // @RelationCount((flowers: Flowers) => flowers.likes)
  // imageCount: number;

  // @RelationCount((flowers: Flowers) => flowers.likes, "removeLikes", qb =>
  //   qb.andWhere("removeLikes.isRemoved = :isRemoved", { isRemoved: true })
  // )
  // removedImageCount: number;

  @CreateDateColumn()
  createFlower: string;

  @UpdateDateColumn()
  updateFlower: string;
}
