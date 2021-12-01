import { Injectable, Inject } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Users } from '../entities/Users.entity'
@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>
  ) {}

  async findAll() {
    return this.userRepository.find()
  }
  async findUserAll() {
    return this.userRepository.find()
  }
}
