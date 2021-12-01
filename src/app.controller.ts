import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AppService } from './app.service'
import { TestService } from './server/test.service'
@ApiTags('app')
@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly testService: TestService
  ) {}

  @Get('get/hello')
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('get/testinfos')
  async getTestInfo() {
    return await this.testService.findAll()
  }
  @Get('get/userinfos')
  async getUsers() {
    return await this.testService.findUserAll()
  }
}
