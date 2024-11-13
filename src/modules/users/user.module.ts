import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './repositories/user.repository';
import { CreateUserService } from './services/create-user-service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/modules/users/schemas/user.schema';
import { FindOneUserService } from './services/find-one-user-service';
import { FindAllService } from './services/find-all-service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController],
  providers: [
    UserRepository,
    CreateUserService,
    FindOneUserService,
    FindAllService,
  ],
})
export class UserModule { }
