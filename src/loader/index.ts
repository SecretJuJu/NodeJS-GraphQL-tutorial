import express from "express";

import expressLoader from "./express";

export interface LoaderSetting {
  expressApp: express.Express;
}

export default async ({ expressApp }: LoaderSetting) => {
  await expressLoader({ app: expressApp });
};
