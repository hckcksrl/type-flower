import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  BaseEntity,
  CreateDateColumn
} from "typeorm";
import { Flowers } from "./Flowers";
import { Images } from "./Image";

@Entity({ name: "flower_image" })
export class Flower_Image extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Images, images => images.id, {
    cascade: true,
    onDelete: "CASCADE"
  })
  images: Images;

  @ManyToOne(type => Flowers, flowers => flowers.id, {
    cascade: true,
    onDelete: "CASCADE"
  })
  flowers: Flowers;
}
