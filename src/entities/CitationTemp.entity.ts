import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pkid", ["id"], { unique: true })
@Entity("CitationTemp", { schema: "dbo" })
export class CitationTemp {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Id" })
  id: string;

  @Column("varchar", { name: "Citation", nullable: true })
  citation: string | null;

  @Column("bigint", { name: "OldId", nullable: true })
  oldId: string | null;

  @Column("bigint", { name: "NewId", nullable: true })
  newId: string | null;
}
