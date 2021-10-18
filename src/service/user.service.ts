import { Model } from "mongoose";

import { User, UserModelDocument } from "models/user.model";

class UserService {
  constructor(private User: Model<UserModelDocument>) {}
}

export default new UserService(User);
