import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

import { Images } from "./Image";
import { Flower_Image } from "./Flower_Image";

@Entity({ name: "flowers" })
export class Flowers extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  image: string;

  @Column({ type: "varchar", nullable: false })
  name: string;

  @Column({ type: "varchar", nullable: false })
  type: string;

  @Column({ type: "varchar", nullable: false })
  color: string;

  @Column({ type: "varchar", nullable: false })
  content: string;

  @Column({ type: "varchar", nullable: false })
  weather: string;

  @Column({ type: "bigint", nullable: false, default: 0 })
  hits: number;

  @OneToMany(type => Flower_Image, flower_image => flower_image.id, {
    cascade: true,
    onDelete: "CASCADE"
  })
  flower_image: Flower_Image[];

  // @ManyToMany(type => Images, images => images.id, {
  //   cascade: true,
  //   onDelete: "CASCADE"
  // })
  // images: Images[];

  @CreateDateColumn()
  createFlower: string;

  @UpdateDateColumn()
  updateFlower: string;
}
