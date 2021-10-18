import express from "express";
import loader from "./loader";
import env from "config/env";

const app = express();

const loadSettings = async () => {
  await loader({ expressApp: app });
};

loadSettings();

app.listen(env.PORT, () => {
  console.log(`server is running at ${env.PORT}`);
});
