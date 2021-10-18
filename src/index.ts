import express from "express";
import loader from "./loader";

const app = express();

const loadSettings = async () => {
  await loader({ expressApp: app });
};

loadSettings();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
