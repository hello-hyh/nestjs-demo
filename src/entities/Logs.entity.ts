import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Logs", ["id"], { unique: true })
@Entity("Logs", { schema: "dbo" })
export class Logs {
  @PrimaryGeneratedColumn({ type: "bigint", name: "Id" })
  id: string;

  @Column("bit", { name: "IsDeleted" })
  isDeleted: boolean;

  @Column("datetime2", { name: "DeletedTime", nullable: true })
  deletedTime: Date | null;

  @Column("nvarchar", { name: "Account" })
  account: string;

  @Column("nvarchar", { name: "IP" })
  ip: string;

  @Column("datetime2", { name: "LoginTime" })
  loginTime: Date;
}
