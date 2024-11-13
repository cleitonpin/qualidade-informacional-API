import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePollDTO } from '../dtos/create-poll-dto';
import { Poll } from '../schemas/poll.schema';
import { PollFilter } from '../interfaces/poll';

import { AppService } from '../../../app.service';
import { User } from '../../users/schemas/user.schema';
import {
  getMessageForTotalSum,
  summedValues,
} from '../../../common/helpers/formatters';

@Injectable()
export class PollRepository {
  constructor(
    @InjectModel('Poll') private readonly pollModel: Model<Poll>,
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly appService: AppService,
  ) { }

  async create(poll: CreatePollDTO) {
    try {
      const user = await this.userModel.findById(poll.user).exec();
      const sum = summedValues(poll);

      const createdPoll = await this.pollModel.create({
        ...poll,
        totalCategories: sum.totalCategories,
      });
      console.log(poll);
      this.appService.sendEmail(
        'pauloricardo.silvalimma@gmail.com', // user.email,
        'result',
        'Resultado da sua pesquisa! 📊',
        {
          university: user.university,
          message: getMessageForTotalSum(sum.totalCategories),
          total: sum.totalCategories,
          poll,
          empty: '',
        },
      );

      return createdPoll;
    } catch (error) {
      throw new HttpException(
        {
          status: 400,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }

  async findAll({ state, limit = 10, page = 1, sortByDate }: PollFilter) {
    try {
      const cachedPolls = await this.appService.getCacheKey('polls');

      console.log('\x1b[33m%s\x1b[0m', 'Cache miss: Polls', cachedPolls);
      if (!cachedPolls) {
        const polls = await this.pollModel.find().populate({
          path: 'user',
          select:
            'university ageRange levelEducation gender email state role name',
        });

        await this.appService.setCacheKey('polls', JSON.stringify(polls));

        console.log('\x1b[33m%s\x1b[0m', 'Cache miss: Polls');

        return polls;
      }

      console.log('\x1b[32m%s\x1b[0m', 'Cache hit: Polls');
      return JSON.parse(cachedPolls);
    } catch (error) {
      throw new HttpException(
        {
          status: 404,
          error: error.message,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  async delete(id: string) {
    try {
      const poll = await this.pollModel.findByIdAndDelete(id).exec();
      const user = await this.userModel.findByIdAndDelete(poll.user).exec();

      return {
        poll,
        user,
      };
    } catch (error) {
      throw new HttpException(
        {
          status: 404,
          error: error.message,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }
}
