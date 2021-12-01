import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { RolePowerMappings } from './RolePowerMappings.entity'
import { Users } from './Users.entity'

@Index('PK_Roles', ['id'], { unique: true })
@Entity('Roles', { schema: 'dbo' })
export class Roles {
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

  @Column('int', { name: 'RoleType' })
  roleType: number

  @OneToMany(
    () => RolePowerMappings,
    rolePowerMappings => rolePowerMappings.role
  )
  rolePowerMappings: RolePowerMappings[]

  @OneToMany(() => Users, users => users.role)
  users: Users[]
}
