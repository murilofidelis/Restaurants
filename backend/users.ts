export class User {

  constructor(
    public email: string,
    public name: string,
    private password: string
  ) { }

  matches(another: User): boolean {
    return another !== undefined && another.email === this.email && another.password === this.password;
  }
}

export const users: { [key: string]: User } = {
  'adm@adm.com': new User('adm@adm.com', 'ADM', '123'),
  'murilo@teste.com': new User('murilo@teste.com', 'Murilo', '123')
}
