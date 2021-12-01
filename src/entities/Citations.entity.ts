import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Citations", ["id"], { unique: true })
@Entity("Citations", { schema: "dbo" })
export class Citations {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Id" })
  id: string;

  @Column("nvarchar", { name: "CitationContent", nullable: true })
  citationContent: string | null;

  @Column("image", { name: "Word", nullable: true })
  word: Buffer | null;

  @Column("datetime2", { name: "DeletedTime", nullable: true })
  deletedTime: Date | null;

  @Column("bit", { name: "IsDeleted", default: () => "CONVERT([bit],(0))" })
  isDeleted: boolean;

  @Column("int", { name: "State", nullable: true })
  state: number | null;
}
