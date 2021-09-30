import "reflect-metadata";
import express from "express";

import main from "./database";
import "./shared/container";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.SERVER_PORT, async () => {
  if (process.env.SERVER_RUN_MODE === "development")
    console.log(
      `Server is listenning at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`
    );
  await main();
});
