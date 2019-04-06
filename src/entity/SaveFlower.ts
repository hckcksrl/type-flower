import { Entity, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Librarys } from "./Librarys";
import { Flowers } from "./Flowers";

@Entity({ name: "save_flower" })
export class SaveFlower extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Librarys, librarys => librarys.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: false
  })
  librarys: Librarys;

  @ManyToOne(type => Flowers, flowers => flowers.id, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: false
  })
  flowers: Flowers;
}
