import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class FindOneUserService {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string) {
    return await this.userRepository.findOne({ id });
  }
}
