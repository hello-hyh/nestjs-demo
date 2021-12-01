import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Roles } from './Roles.entity'

@Index('PK_RolePowerMappings', ['id'], { unique: true })
@Entity('RolePowerMappings', { schema: 'dbo' })
export class RolePowerMappings {
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

  @Column('int', { name: 'Power' })
  power: number

  @ManyToOne(() => Roles, roles => roles.rolePowerMappings, {
    onDelete: 'CASCADE'
  })
  @JoinColumn([{ name: 'RoleId', referencedColumnName: 'id' }])
  role: Roles
}
