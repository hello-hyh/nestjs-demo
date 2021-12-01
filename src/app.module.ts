import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { conf } from 'dbConf'
import { TestModule } from '../src/server/test.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [TestModule, TypeOrmModule.forRoot(conf.tox)],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppModule]
})
export class AppModule {}
