import BaseRequest from "../base.request";
import { Request } from "express";
import { IsNotEmpty } from "class-validator";
import { UserObject } from "models/user.model";
import * as AuthError from "error/auth.error";

export interface AuthRequestObject extends Request {
  headers: {
    authorization: string;
  };
  user?: UserObject;
}

export default class AuthRequest extends BaseRequest {
  @IsNotEmpty()
  token: string;

  constructor(req: AuthRequestObject) {
    super(req);
    const { authorization } = req.headers;
    this.token = authorization?.replace("Bearer ", "");
  }

  async validate(): Promise<void> {
    if (!this.token) {
      throw new AuthError.ACCESS_TOKEN_INVAILD_ERROR();
    }
    await super.validate();
  }

  public setUser(user: UserObject): void {
    this.getOriginRequest<AuthRequestObject>().user = user;
  }
}
