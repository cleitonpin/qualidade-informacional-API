import { Injectable } from '@nestjs/common';
import { PollRepository } from '../repositories/poll.repository';

@Injectable()
export class DeletePollService {
  constructor(private pollRepository: PollRepository) { }

  async execute(id: string) {
    return await this.pollRepository.delete(id);
  }
}
