import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TestModule } from '../src/server/test.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [TestModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppModule]
})
export class AppModule {}
