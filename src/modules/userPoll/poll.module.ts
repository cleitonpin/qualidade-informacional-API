import { Module } from '@nestjs/common';
import { PollController } from './poll.controller';
import { PollRepository } from './repositories/poll.repository';
import { CreatePollService } from './services/create-poll';
import { MongooseModule } from '@nestjs/mongoose';
import { PollSchema } from './schemas/poll.schema';
import { FindAllPollService } from './services/findAll-poll';
import { AppService } from 'src/app.service';
import { UserSchema } from '../users/schemas/user.schema';
import { DeletePollService } from './services/delete-poll';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Poll', schema: PollSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [PollController],
  providers: [
    PollRepository,
    CreatePollService,
    FindAllPollService,
    DeletePollService,
    AppService,
  ],
})
export class PollModule { }
