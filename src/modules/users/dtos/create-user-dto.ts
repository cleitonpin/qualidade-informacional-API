import { IsNotEmpty, IsString, IsEmail, IsBoolean } from 'class-validator';

import { IUser } from '../interfaces/user';

export class CreateUserDTO implements IUser {
  @IsNotEmpty()
  @IsString()
  university: string;
  @IsString()
  @IsNotEmpty()
  state: string;
  @IsString()
  @IsNotEmpty()
  yourState: string;
  @IsString()
  @IsNotEmpty()
  role: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsBoolean()
  @IsNotEmpty()
  accepTerms: boolean;
}
