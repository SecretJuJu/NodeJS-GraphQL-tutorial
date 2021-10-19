import { Model } from "mongoose";
import * as bcrypt from "bcrypt";

import { User, UserModelDocument, UserObject } from "models/user.model";
import { CreateUserDto } from "./dtos/create-user.dto";
import { CONFLICT_ERROR } from "error/http-errors";

export class UserService {
  constructor(private User: Model<UserModelDocument>) {}

  async getUserByUsername(username: string): Promise<UserModelDocument | null> {
    const user: UserModelDocument | null = await this.User.findOne({
      username,
    });

    return user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserObject> {
    const isSameUserExist: boolean =
      (await this.getUserByUsername(createUserDto.username)) === null
        ? false
        : true;

    if (!isSameUserExist) {
      throw new CONFLICT_ERROR();
    }

    const hashedPassword = bcrypt.hashSync(createUserDto.password, 10); // sync
    createUserDto.password = hashedPassword;
    const newUser: UserObject = await this.User.create(createUserDto);
    newUser.save();
    return newUser;
  }
}

export default new UserService(User);
