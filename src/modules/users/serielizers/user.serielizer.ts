export class UserSerializer {
  university: string;
  state: string;
  role: string;
  email: string;
  name: string;
  accepTerms: boolean;

  constructor(partial: Partial<UserSerializer>) {
    Object.assign(this, partial);
  }
}
