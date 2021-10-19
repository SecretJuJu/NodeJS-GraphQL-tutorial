import BaseRequest from "request/base.request";
import { NextFunction, Request, Response } from "express";

const RequestValidator = (RequestType: typeof BaseRequest) => {
  return (
    target: unknown,
    property: string,
    descriptor: PropertyDescriptor
  ): void => {
    const origin = descriptor.value;
    descriptor.value = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      const request = new RequestType(req);
      await request.validate();
      return origin(request, res, next);
    };
  };
};

export default RequestValidator;
