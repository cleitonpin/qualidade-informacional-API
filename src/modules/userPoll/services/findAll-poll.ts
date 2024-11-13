import { Injectable } from '@nestjs/common';
import { PollRepository } from '../repositories/poll.repository';
import { PollFilter } from '../interfaces/poll';

@Injectable()
export class FindAllPollService {
  constructor(private pollRepository: PollRepository) {}

  async execute({ state, limit, page, sortByDate }: PollFilter) {
    return await this.pollRepository.findAll({
      state,
      limit,
      page,
      sortByDate,
    });
  }
}
