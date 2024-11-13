import { IsNotEmpty } from 'class-validator';

import {
  ActionsSoftware,
  EconomicInformation,
  HumanResources,
  IPoll,
  Institutional,
  Students,
} from '../interfaces/poll';

export class CreatePollDTO implements IPoll {
  @IsNotEmpty()
  user: string;
  @IsNotEmpty()
  institutional: Institutional;
  @IsNotEmpty()
  economicInformation: EconomicInformation;
  @IsNotEmpty()
  humanResources: HumanResources;
  @IsNotEmpty()
  actions_software: ActionsSoftware;
  @IsNotEmpty()
  students: Students;
}
