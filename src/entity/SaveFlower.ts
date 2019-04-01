import { Entity, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Librarys } from "./Librarys";
import { Flowers } from "./Flowers";

@Entity({ name: "save_flower" })
export class SaveFlower extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Librarys, library => library.id, {
    cascade: true,
    onDelete: "CASCADE"
  })
  library: Librarys;

  @ManyToOne(type => Flowers, flowers => flowers.id, {
    cascade: true,
    onDelete: "CASCADE"
  })
  flowers: Flowers;
}
