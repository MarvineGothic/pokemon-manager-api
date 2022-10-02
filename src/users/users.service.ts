import { Injectable } from '@nestjs/common';
import { User } from './users.type';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'johndoe',
      password: 'lasdfkjouisad7f8',
    },
    {
      userId: 2,
      username: 'peterparker',
      password: 'sldfuo7898sdf',
    },
  ];

  async getUser(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
