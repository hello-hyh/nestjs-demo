import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_ReportChemicalMappings", ["id"], { unique: true })
@Entity("ReportChemicalMappings", { schema: "dbo" })
export class ReportChemicalMappings {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Id" })
  id: string;

  @Column("bigint", { name: "ReportId" })
  reportId: string;

  @Column("bigint", { name: "ChemicalId" })
  chemicalId: string;

  @Column("datetime2", { name: "DeletedTime", nullable: true })
  deletedTime: Date | null;

  @Column("bit", { name: "IsDeleted", default: () => "CONVERT([bit],(0))" })
  isDeleted: boolean;
}
