import { CreateUserDto } from "service/user/dtos/create-user.dto";

import userService, { UserService } from "service/user/user.service";

export class AuthService {
  constructor(private userService: UserService) {}

  async login(username: string, password: string) {}

  async register(createUserDto: CreateUserDto): Promise<string> {
    const newUser = await this.userService.createUser(createUserDto);
    return newUser._id;
  }
}

export default new AuthService(userService);
