import { Column, Entity, Index } from "typeorm";

@Index("PK_Conclusion", ["id"], { unique: true })
@Entity("Conclusion", { schema: "dbo" })
export class Conclusion {
  @Column("uniqueidentifier", { primary: true, name: "Id" })
  id: string;

  @Column("nvarchar", { name: "ConclusionText", nullable: true })
  conclusionText: string | null;
}
