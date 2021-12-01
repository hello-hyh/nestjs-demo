import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Roles } from './Roles.entity'

@Index('PK_Users', ['id'], { unique: true })
@Entity('Users', { schema: 'dbo' })
export class Users {
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

  @Column('nvarchar', { name: 'Account' })
  account: string

  @Column('bit', { name: 'IsEnabled' })
  isEnabled: boolean

  @ManyToOne(() => Roles, roles => roles.users, { onDelete: 'CASCADE' })
  @JoinColumn([{ name: 'RoleId', referencedColumnName: 'id' }])
  role: Roles
}
