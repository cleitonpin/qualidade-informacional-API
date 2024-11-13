import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class FindAllService {
  constructor(private userRepository: UserRepository) { }

  async execute() {
    return await this.userRepository.findAll();
  }
}
