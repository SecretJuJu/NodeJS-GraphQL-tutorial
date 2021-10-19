import { NextFunction, Request, Response } from "express";
import errorTypes from "error";
import BaseError from "error/base.error";

const errorMiddleware = (
  error: BaseError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // able to handle errors
  const registeredError: BaseError | undefined = error;
  errorTypes.find((errorType) => error instanceof errorType);

  if (registeredError !== undefined) {
    try {
      registeredError.handleResponse(res);
    } catch (err) {
      res.status(500).send();
    }
  } else {
    res.status(500).send();
  }
};

export default errorMiddleware;
