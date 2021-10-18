import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import router from "router";

export interface ExpressLoader {
  app: express.Express;
}

export default ({ app }: ExpressLoader) => {
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(router);
  app.use(morgan("combined"));
};
