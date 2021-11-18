import { Controller, Get } from '@nestjs/common'
import { Test_table } from 'entitys/test.entity'

import { AppService } from './app.service'
import { TestService } from './server/test.service'

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly testService: TestService
  ) {}

  @Get('/get/hello')
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('get/testinfos')
  async getTestInfo(): Promise<Test_table[]> {
    return await this.testService.findAll()
  }
  @Get('get/userinfos')
  async getUsers() {
    return await this.testService.findUserAll()
  }
}
