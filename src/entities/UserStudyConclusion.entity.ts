import { Column, Entity, Index } from "typeorm";

@Index("PK_StudyConclusion", ["id"], { unique: true })
@Entity("UserStudyConclusion", { schema: "dbo" })
export class UserStudyConclusion {
  @Column("uniqueidentifier", { primary: true, name: "id" })
  id: string;

  @Column("nvarchar", { name: "UserStudyNo" })
  userStudyNo: string;

  @Column("nvarchar", { name: "StudyCasrn", nullable: true })
  studyCasrn: string | null;

  @Column("bigint", { name: "StudyChemicalId", nullable: true })
  studyChemicalId: string | null;

  @Column("nvarchar", { name: "StudyChemicalName", nullable: true })
  studyChemicalName: string | null;

  @Column("nvarchar", { name: "StudyGroupName", nullable: true })
  studyGroupName: string | null;

  @Column("nvarchar", { name: "UserAccount" })
  userAccount: string;

  @Column("int", { name: "UserReportLanguage", nullable: true })
  userReportLanguage: number | null;

  @Column("int", { name: "CreatorId", nullable: true })
  creatorId: number | null;

  @Column("datetime2", { name: "CreateDate", nullable: true })
  createDate: Date | null;

  @Column("bigint", { name: "isDelete", nullable: true })
  isDelete: string | null;

  @Column("datetime2", { name: "DeleteDate", nullable: true })
  deleteDate: Date | null;

  @Column("bigint", { name: "CitationId", nullable: true })
  citationId: string | null;

  @Column("uniqueidentifier", { name: "ConclusionId", nullable: true })
  conclusionId: string | null;

  @Column("nvarchar", { name: "CitationState", nullable: true })
  citationState: string | null;

  @Column("nvarchar", { name: "GroupName", nullable: true })
  groupName: string | null;

  @Column("nvarchar", { name: "Casrn", nullable: true })
  casrn: string | null;

  @Column("nvarchar", { name: "ChemicalName", nullable: true })
  chemicalName: string | null;

  @Column("bigint", { name: "ChemicalId", nullable: true })
  chemicalId: string | null;

  @Column("nvarchar", { name: "CitationContent", nullable: true })
  citationContent: string | null;

  @Column("nvarchar", { name: "TiValue", nullable: true })
  tiValue: string | null;

  @Column("nvarchar", { name: "PDE", nullable: true })
  pde: string | null;

  @Column("nvarchar", { name: "Duration", nullable: true })
  duration: string | null;

  @Column("nvarchar", { name: "TypeBodyContact", nullable: true })
  typeBodyContact: string | null;

  @Column("nvarchar", { name: "Population", nullable: true })
  population: string | null;

  @Column("bigint", { name: "SourceReportId", nullable: true })
  sourceReportId: string | null;

  @Column("nvarchar", { name: "SourceStudyNo", nullable: true })
  sourceStudyNo: string | null;

  @Column("nvarchar", { name: "SourceReportAuthor", nullable: true })
  sourceReportAuthor: string | null;

  @Column("int", { name: "SourceStudyReportsLanguage", nullable: true })
  sourceStudyReportsLanguage: number | null;

  @Column("datetime2", { name: "SourceReportDate", nullable: true })
  sourceReportDate: Date | null;

  @Column("bit", { name: "StudyIsDeleted", nullable: true })
  studyIsDeleted: boolean | null;

  @Column("datetime2", { name: "StudyDeleteDate", nullable: true })
  studyDeleteDate: Date | null;
}
