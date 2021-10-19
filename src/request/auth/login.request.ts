import BaseRequest from "../base.request";
import { Request } from "express";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

interface OriginalCreateUserRequest extends Request {
  body: {
    username: string;
    password: string;
  };
}

export default class LoginRequest extends BaseRequest {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  constructor(req: OriginalCreateUserRequest) {
    super(req);
    const { username, password } = req.body;
    this.username = username;
    this.password = password;
  }
}
