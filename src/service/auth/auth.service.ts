import { compareSync } from "bcrypt";

import { UNAUTHORIZED_ERROR } from "error/http.error";
import { UserObject } from "models/user.model";
import { CreateUserDto } from "service/user/dtos/create-user.dto";
import userService from "service/user/user.service";

export class AuthService {
  constructor() {}

  async validateUser(username: string, password: string): Promise<UserObject> {
    const user: UserObject | null = await userService.getUserByUsername(
      username
    );

    if (user && compareSync(password, user.password)) {
      return user;
    }
    throw new UNAUTHORIZED_ERROR();
  }

  async register(createUserDto: CreateUserDto): Promise<string> {
    const newUser = await userService.createUser(createUserDto);
    return newUser._id;
  }
}

export default new AuthService();
