import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

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
}
