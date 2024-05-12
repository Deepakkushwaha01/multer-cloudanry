import express from "express";
import dotenv from "dotenv";
import db from "./DB/dataBase.js";
import router from "./Router/routes.js";

const app = express();
(async function () {
  dotenv.config();
  await db();
  app.use(express.json());
  app.use(router)
  app.use('/temp',express.static('temp'))
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log("Server Successfully Started..........");
  });
})();
