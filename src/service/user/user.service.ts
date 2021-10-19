import { Model } from "mongoose";

import { User, UserModelDocument } from "models/user.model";
import { CreateUserDto } from "./dtos/create-user.dto";

export class UserService {
  constructor(private User: Model<UserModelDocument>) {}

  async getUserByUsername(username: string) {
    console.log("Search with", username);
    const user = await this.User.findOne({ username });
    if (!user) {
      return null;
    } else {
      return user;
    }
  }

  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.User.create(createUserDto);
    console.log(newUser);
  }
}

export default new UserService(User);
