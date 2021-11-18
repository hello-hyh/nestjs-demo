import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Test_table {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  test_info: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  filename: string

  @Column()
  views: number

  @Column()
  isPublished: boolean
}
