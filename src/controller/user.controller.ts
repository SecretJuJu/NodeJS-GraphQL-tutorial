import { Request, Response } from "express";
import { AuthRequestObject } from "request/auth/auth-request";

class UserController {
  async getMe(req: Required<AuthRequestObject>, res: Response) {
    const { username } = req.user;

    return res.json({ username });
  }
}

export default new UserController();
