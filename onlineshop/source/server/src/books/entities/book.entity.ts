import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 40 })
  title: string;

  @Column()
  publicationYear: number; 

  @Column()
  description: string;
}