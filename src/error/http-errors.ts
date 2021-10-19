import { Response } from "express";
import { ValidationError } from "class-validator";
import BASE_ERROR from "./base-error";

export class HttpError extends BASE_ERROR {
  statusCode = 0;
  handleResponse(res: Response): void {
    res.status(this.statusCode).send();
  }
}

export class CONFLICT_ERROR extends HttpError {
  statusCode = 409;
}
export class UNAUTHORIZED_ERROR extends HttpError {
  statusCode = 401;
}

export class VALIDATION_ERROR extends HttpError {
  statusCode = 400;
  errorBody: { [key: string]: string };
  handleResponse(res: Response): void {
    res.status(this.statusCode).json(this.errorBody);
  }

  constructor(errors: any) {
    super();
    this.errorBody = errors.map((e: ValidationError) => e.constraints);
  }
}
