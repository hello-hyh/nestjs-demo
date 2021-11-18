import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "nestjs-demo" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "username", length: 255 })
  username: string;
}
