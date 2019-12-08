import * as express from "express";
import { eventController } from "./controllers/events";
import { recipientController } from "./controllers/recipients";

const app = express();

app.use(eventController);
app.use(recipientController);

export default app;
