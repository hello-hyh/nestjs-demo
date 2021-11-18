import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../../entitys/user.entity'
import { Test_table } from '../../entitys/test.entity'
import { TestService } from './test.service'

@Module({
  imports: [TypeOrmModule.forFeature([Test_table, User])],
  providers: [TestService],
  exports: [TestService]
})
export class TestModule {}
