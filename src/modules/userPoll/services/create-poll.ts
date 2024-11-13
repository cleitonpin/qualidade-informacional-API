import { Injectable } from '@nestjs/common';
import { PollRepository } from '../repositories/poll.repository';
import { CreatePollDTO } from '../dtos/create-poll-dto';

@Injectable()
export class CreatePollService {
  constructor(private readonly pollRepository: PollRepository) { }

  async execute(createPollDTO: CreatePollDTO) {
    return await this.pollRepository.create(createPollDTO);
  }
}
