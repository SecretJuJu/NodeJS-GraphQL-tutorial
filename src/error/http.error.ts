import { Response } from "express";
import { ValidationError } from "class-validator";
import { StatusCodes } from "http-status-codes";

import BASE_ERROR from "./base.error";

export class HttpError extends BASE_ERROR {
  statusCode = 0;
  handleResponse(res: Response): void {
    res.status(this.statusCode).send();
  }
}

export class CONFLICT_ERROR extends HttpError {
  statusCode = StatusCodes.CONFLICT;
}
export class UNAUTHORIZED_ERROR extends HttpError {
  statusCode = StatusCodes.UNAUTHORIZED;
}

export class VALIDATION_ERROR extends HttpError {
  statusCode = StatusCodes.BAD_REQUEST;
  errorBody: { [key: string]: string };
  handleResponse(res: Response): void {
    res.status(this.statusCode).json(this.errorBody);
  }

  constructor(errors: any) {
    super();
    this.errorBody = errors.map((e: ValidationError) => e.constraints);
  }
}
