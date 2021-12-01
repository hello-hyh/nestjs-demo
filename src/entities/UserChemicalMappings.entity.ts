import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_UserChemicalMappings", ["id"], { unique: true })
@Entity("UserChemicalMappings", { schema: "dbo" })
export class UserChemicalMappings {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Id" })
  id: string;

  @Column("bit", { name: "IsDeleted" })
  isDeleted: boolean;

  @Column("datetime2", { name: "DeletedTime", nullable: true })
  deletedTime: Date | null;

  @Column("datetime2", { name: "CreationTime" })
  creationTime: Date;

  @Column("bigint", { name: "CreatorId", nullable: true })
  creatorId: string | null;

  @Column("datetime2", { name: "LastModificationTime", nullable: true })
  lastModificationTime: Date | null;

  @Column("bigint", { name: "LastModifierId", nullable: true })
  lastModifierId: string | null;

  @Column("nvarchar", { name: "Account", nullable: true })
  account: string | null;

  @Column("bigint", { name: "ChemicalId" })
  chemicalId: string;

  @Column("nvarchar", { name: "Casrn", nullable: true })
  casrn: string | null;

  @Column("nvarchar", { name: "ChemicalName", nullable: true })
  chemicalName: string | null;

  @Column("int", { name: "Language", default: () => "(0)" })
  language: number;

  @Column("nvarchar", { name: "StudyNo", nullable: true })
  studyNo: string | null;

  @Column("int", { name: "Type", default: () => "(0)" })
  type: number;
}
