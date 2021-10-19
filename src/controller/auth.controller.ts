import { Response } from "express";
import { StatusCodes } from "http-status-codes";

import RequestValidator from "utils/request-validator";
import CreateUserRequest from "request/auth/create-user.request";
import { CreateUserDto } from "service/user/dtos/create-user.dto";
import authService from "service/auth/auth.service";
import LoginRequest from "request/auth/login.request";
import jwtService from "service/jwt/jwt.service";

class AuthController {
  constructor() {}

  @RequestValidator(LoginRequest)
  async login(req: LoginRequest, res: Response) {
    const { username, password } = req;
    const user = await authService.validateUser(username, password);
    const token = jwtService.createAccessToken(user);
    return res.status(StatusCodes.OK).json({ token });
  }

  @RequestValidator(CreateUserRequest)
  async register(req: CreateUserRequest, res: Response) {
    const { username, password } = req;
    const createUserDto: CreateUserDto = { username, password };
    const userId = await authService.register(createUserDto);

    return res.status(StatusCodes.CREATED).json({ _id: userId });
  }
}

export default new AuthController();
