import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Users } from "./Users";

@Entity({ name: "questions" })
export class Questions extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  question: string;

  @ManyToOne(type => Users, users => users.id, {
    cascade: true,
    onUpdate: "CASCADE",
    nullable: false
  })
  users: Users;

  @CreateDateColumn()
  createQuestion: string;

  @UpdateDateColumn()
  updateQuestion: string;
}
