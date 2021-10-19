import { NextFunction, Request, Response } from "express";
import errors from "error";
import BaseError from "error/base-error";

const errorMiddleware = (
  error: BaseError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // able to handle errors
  const registeredError: BaseError | undefined = error;
  errors.find((e) => error instanceof e);
  if (!registeredError) {
    res.status(500).send();
  } else {
    registeredError.handleResponse(res);
  }
};

export default errorMiddleware;
