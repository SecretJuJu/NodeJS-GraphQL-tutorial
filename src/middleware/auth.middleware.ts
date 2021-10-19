import { NextFunction, Response } from "express";
import { TokenExpiredError } from "jsonwebtoken";
import * as AuthError from "error/auth.error";
import { User } from "models/user.model";
import RequestValidator from "utils/request-validator";
import jwtService from "service/jwt/jwt.service";
import AuthRequest from "request/auth/auth-request";

class AuthMiddleware {
  @RequestValidator(AuthRequest)
  static async run(
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { _id: userId } = await jwtService.verifyAccessToken(req.token);

      if (userId === undefined) {
        console.log;
        throw new AuthError.ACCESS_TOKEN_INVAILD_ERROR();
      }

      const user = await User.findById(userId);

      if (user === null) {
        throw new AuthError.USER_NOT_FOUND();
      }
      req.setUser(user);
      next();
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new AuthError.ACCESS_TOKEN_EXPIRED();
      } else {
        throw new AuthError.ACCESS_TOKEN_INVAILD_ERROR();
      }
    }
  }
}

export default AuthMiddleware.run;
