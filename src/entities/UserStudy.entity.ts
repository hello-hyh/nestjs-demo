import { Column, Entity, Index } from "typeorm";

@Index("PK_UserStudy", ["id"], { unique: true })
@Entity("UserStudy", { schema: "dbo" })
export class UserStudy {
  @Column("uniqueidentifier", { primary: true, name: "id" })
  id: string;

  @Column("nvarchar", { name: "StudyNo", nullable: true })
  studyNo: string | null;

  @Column("nvarchar", { name: "Casrn" })
  casrn: string;

  @Column("nvarchar", { name: "ChemicalsId" })
  chemicalsId: string;

  @Column("nvarchar", { name: "ChemicalName" })
  chemicalName: string;

  @Column("nvarchar", { name: "GroupName" })
  groupName: string;

  @Column("nvarchar", { name: "Account", nullable: true })
  account: string | null;

  @Column("bigint", { name: "CreatorId", nullable: true })
  creatorId: string | null;

  @Column("datetime", { name: "CreateTime", nullable: true })
  createTime: Date | null;

  @Column("bit", { name: "IsDelete", nullable: true })
  isDelete: boolean | null;

  @Column("datetime", { name: "DeleteTime" })
  deleteTime: Date;
}
