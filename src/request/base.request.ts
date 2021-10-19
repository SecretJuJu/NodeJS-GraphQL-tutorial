import { Request } from "express";
import { validate } from "class-validator";
import { VALIDATION_ERROR } from "error/http-errors";

class BaseRequest {
  req: Request;

  constructor(req: Request) {
    this.req = req;
  }

  async validate(): Promise<void> {
    const errors = await validate(this);
    if (!errors.length) {
      return;
    }

    throw new VALIDATION_ERROR(errors);
  }

  protected getOriginRequest<T extends Request>(): T {
    return this.req as T;
  }
}

export default BaseRequest;
