import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import {
  ActionsSoftware,
  EconomicInformation,
  HumanResources,
  Institutional,
  Students,
} from '../interfaces/poll';


@Schema({
  timestamps: true,
})
export class Poll {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: string;

  @Prop({
    type: Object,
    required: true,
  })
  institutional: Institutional;

  @Prop({
    type: Object,
    required: true,
  })
  actions_softwares: ActionsSoftware;

  @Prop({
    type: Object,
    required: true,
  })
  students: Students;

  @Prop({
    type: Object,
    required: true,
  })
  humanResources: HumanResources;

  @Prop({
    type: Object,
    required: true,
  })
  economicInformation: EconomicInformation;

  @Prop({ required: true })
  totalCategories: number;
}

export type PollDocument = HydratedDocument<Poll>;

export const PollSchema = SchemaFactory.createForClass(Poll);
