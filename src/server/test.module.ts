import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Users } from '../entities/Users.entity'
import { TestService } from './test.service'

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [TestService],
  exports: [TestService]
})
export class TestModule {}
