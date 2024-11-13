import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreatePollService } from './services/create-poll';
import { CreatePollDTO } from './dtos/create-poll-dto';
import { FindAllPollService } from './services/findAll-poll';
import { DeletePollService } from './services/delete-poll';

@Controller('polls')
export class PollController {
  constructor(
    private readonly createPollService: CreatePollService,
    private readonly findAllPollService: FindAllPollService,
    private readonly deletePollService: DeletePollService,
  ) { }

  // @UseInterceptors(ClassSerializerInterceptor(Res))
  @Post('/create')
  async create(@Body() data: CreatePollDTO) {
    // console.log(data);
    return await this.createPollService.execute(data);
  }

  @Get()
  async findAll(@Query() { state, limit, page, sortByDate }) {
    return await this.findAllPollService.execute({
      state,
      limit,
      page,
      sortByDate,
    });
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: string) {
    return await this.deletePollService.execute(id);
  }
}
