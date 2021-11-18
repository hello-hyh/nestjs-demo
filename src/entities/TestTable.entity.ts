import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("test_table", { schema: "nestjs-demo" })
export class TestTable {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "test_info", length: 255 })
  testInfo: string;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "description", length: 255 })
  description: string;

  @Column("varchar", { name: "filename", length: 255 })
  filename: string;

  @Column("int", { name: "views" })
  views: number;

  @Column("tinyint", { name: "isPublished" })
  isPublished: number;
}
