import getEnv from "./get-env";
import { config } from "dotenv";

config();

const env = {
  PORT: getEnv("PORT"),
};

export default env;
