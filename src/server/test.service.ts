import { Injectable, Inject } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../../entitys/user.entity'
import { Repository } from 'typeorm'
import { Test_table } from '../../entitys/test.entity'

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test_table) // 这里应该使用模板字符串
    private readonly testRepository: Repository<Test_table>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async findAll(): Promise<Test_table[]> {
    return this.testRepository.find()
  }
  async findUserAll() {
    return this.userRepository.find()
  }
}
