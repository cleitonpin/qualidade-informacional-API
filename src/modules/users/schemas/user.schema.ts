import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  university: string;
  @Prop({ required: true })
  gender: string;
  @Prop({ required: true })
  ageRange: string;
  @Prop({ required: true })
  levelEducation: string;
  @Prop({ required: true })
  state: string;
  @Prop({ required: true })
  yourState: string;
  @Prop({ required: true })
  role: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  acceptTerms: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
