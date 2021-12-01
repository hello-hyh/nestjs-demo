import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_StudyReports", ["id"], { unique: true })
@Entity("StudyReports", { schema: "dbo" })
export class StudyReports {
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

  @Column("nvarchar", { name: "StudyNo", nullable: true })
  studyNo: string | null;

  @Column("nvarchar", { name: "TypeBodyContact", nullable: true })
  typeBodyContact: string | null;

  @Column("nvarchar", { name: "Duration", nullable: true })
  duration: string | null;

  @Column("nvarchar", { name: "Population", nullable: true })
  population: string | null;

  @Column("datetime", { name: "Dates", nullable: true })
  dates: Date | null;

  @Column("image", { name: "Word", nullable: true })
  word: Buffer | null;

  @Column("int", { name: "Language" })
  language: number;

  @Column("nvarchar", { name: "Author", nullable: true })
  author: string | null;
}
