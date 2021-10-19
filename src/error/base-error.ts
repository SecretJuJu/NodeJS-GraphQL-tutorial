import { Response } from "express";

export interface BaseError extends Error {
  handleResponse: (res: Response) => void;
}

class BASE_ERROR extends Error implements BaseError {
  handleResponse(res: Response): void {
    res.status(500);
  }
}

export default BASE_ERROR;
