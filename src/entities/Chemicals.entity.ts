import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('PK_Chemicals', ['id'], { unique: true })
@Entity('Chemicals', { schema: 'dbo' })
export class Chemicals {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'Id' })
  id: string

  @Column('bit', { name: 'IsDeleted' })
  isDeleted: boolean

  @Column('datetime2', { name: 'DeletedTime', nullable: true })
  deletedTime: Date | null

  @Column('datetime2', { name: 'CreationTime' })
  creationTime: Date

  @Column('bigint', { name: 'CreatorId', nullable: true })
  creatorId: string | null

  @Column('datetime2', { name: 'LastModificationTime', nullable: true })
  lastModificationTime: Date | null

  @Column('bigint', { name: 'LastModifierId', nullable: true })
  lastModifierId: string | null

  @Column('nvarchar', { name: 'Casrn', nullable: true })
  casrn: string | null

  @Column('nvarchar', { name: 'ChemicalName', nullable: true })
  chemicalName: string | null

  @Column('nvarchar', { name: 'PDE', nullable: true })
  pde: string | null

  @Column('nvarchar', { name: 'TiValue', nullable: true })
  tiValue: string | null

  @Column('nvarchar', { name: 'Details', nullable: true })
  details: string | null

  @Column('image', { name: 'Word', nullable: true })
  word: Buffer | null

  @Column('nvarchar', { name: 'GroupName', nullable: true })
  groupName: string | null

  @Column('int', { name: 'State' })
  state: number

  @Column('int', { name: 'Language' })
  language: number

  @Column('nvarchar', { name: 'Source', nullable: true })
  source: string | null
}
