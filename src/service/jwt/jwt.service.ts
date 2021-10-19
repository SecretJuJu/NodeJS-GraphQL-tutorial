import jwt, { JwtPayload } from "jsonwebtoken";

import env from "config/env";
import { UserObject } from "models/user.model";

export interface UserJwtPayload extends JwtPayload {
  _id?: any;
}

class JwtService {
  async verifyAccessToken(token: string) {
    const user = jwt.verify(token, env.JWT_SECRET) as UserJwtPayload;

    return user;
  }

  createAccessToken(user: UserObject): string {
    const payload = { _id: user._id };
    const token = jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRATION,
    });

    return token;
  }
}

export default new JwtService();
