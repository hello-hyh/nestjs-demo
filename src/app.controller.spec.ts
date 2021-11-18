import { Test, TestingModule } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Test_table } from '../entitys/test.entity'
import { User } from '../entitys/user.entity'
import { AppController } from './app.controller'
import { AppModule } from './app.module'

import { TestService } from './server/test.service'

describe('AppController', () => {
  let appController: AppController
  let testService: TestService
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()
    appController = app.get<AppController>(AppController)
    testService = app.get<TestService>(TestService)
  })
  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!')
    })
    it('test canbe run ', async () => {
      expect(await testService.findUserAll()).toBe([])
    })
  })
})
