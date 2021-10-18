import express from "express";

import expressLoader from "./express";
import connectDB from "config/connect-mongo";

connectDB();

export interface LoaderSetting {
  expressApp: express.Express;
}

export default async ({ expressApp }: LoaderSetting) => {
  await expressLoader({ app: expressApp });
};
