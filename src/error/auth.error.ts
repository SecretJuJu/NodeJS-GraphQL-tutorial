import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import BASE_ERROR from "./base.error";

export class AUTH_ERROR extends BASE_ERROR {
  statusCode = 401;
  msg = "";
  handleResponse(res: Response) {
    res.status(StatusCodes.UNAUTHORIZED).send(this.msg);
  }
}

export class ACCESS_TOKEN_EXPIRED extends AUTH_ERROR {
  msg = "Token Expired";
}
export class ACCESS_TOKEN_INVAILD_ERROR extends AUTH_ERROR {
  msg = "Token Invaild";
}
export class USER_NOT_FOUND extends AUTH_ERROR {
  msg = "User Not Found";
}
