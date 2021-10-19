import { Request, Response } from "express";
import authService, { AuthService } from "service/auth/auth.service";

import RequestValidator from "utils/request-validator";
import CreateUserRequest from "request/auth/create-user.request";

class AuthController {
  constructor(private authService: AuthService) {}

  login(req: Request, res: Response) {}

  @RequestValidator(CreateUserRequest)
  register(req: CreateUserRequest, res: Response) {}
}

export default new AuthController(authService);
