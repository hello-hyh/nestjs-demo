import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_ChemicalCitationMappings", ["id"], { unique: true })
@Entity("ChemicalCitationMappings", { schema: "dbo" })
export class ChemicalCitationMappings {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Id" })
  id: string;

  @Column("bigint", { name: "CitationId" })
  citationId: string;

  @Column("bigint", { name: "ChemicalId" })
  chemicalId: string;

  @Column("datetime2", { name: "DeletedTime", nullable: true })
  deletedTime: Date | null;

  @Column("bit", { name: "IsDeleted", default: () => "CONVERT([bit],(0))" })
  isDeleted: boolean;
}
