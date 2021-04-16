import express from "express";
import bodyParser from "body-parser";

import AnimalRouter from "./routes/animal";

const app: express.Application = express();
const APP_PORT = 3000;

app.use(bodyParser.json());
app.use("/animals", AnimalRouter);

app.listen(APP_PORT, (): void => {
  console.log(`Listening at: ${APP_PORT}`);
});
