import getEnv from "./get-env";
import { config } from "dotenv";

config();

const env = {
  PORT: getEnv("PORT"),
  MONGO: {
    USER: getEnv("MONGO_USER"),
    PASSWORD: getEnv("MONGO_PASSWORD"),
    DBNAME: getEnv("MONGO_DBNAME"),
    HOST: getEnv("MONGO_HOST"),
    PORT: getEnv("MONGO_PORT"),
  },
};

export default env;
