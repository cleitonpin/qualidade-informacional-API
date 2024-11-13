import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDTO } from '../dtos/create-user-dto';

@Injectable()
export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  async execute(createUserDTO: CreateUserDTO) {
    return await this.userRepository.create(createUserDTO);
  }
}
