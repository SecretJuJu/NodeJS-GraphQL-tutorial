import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import RequestValidator from "utils/request-validator";
import CreateUserRequest from "request/auth/create-user.request";
import { CreateUserDto } from "service/user/dtos/create-user.dto";
import authService, { AuthService } from "service/auth/auth.service";

class AuthController {
  constructor() {}

  login(req: Request, res: Response) {}

  @RequestValidator(CreateUserRequest)
  async register(req: CreateUserRequest, res: Response) {
    const { username, password } = req;
    const createUserDto: CreateUserDto = { username, password };
    const userId = await authService.register(createUserDto);

    return res.status(StatusCodes.CREATED).json({ _id: userId });
  }
}

export default new AuthController();
