import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserService } from './services/create-user-service';
import { CreateUserDTO } from './dtos/create-user-dto';
import { FindAllService } from './services/find-all-service';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly findAllUserService: FindAllService,
  ) { }

  // @UseInterceptors(ClassSerializerInterceptor(Res))
  @Post()
  async create(@Body() data: CreateUserDTO) {
    console.log(data);
    return await this.createUserService.execute(data);
  }

  @Get()
  async list() {
    return await this.findAllUserService.execute();
  }
}
