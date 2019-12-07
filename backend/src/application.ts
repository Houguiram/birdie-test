import * as express from "express";
import { eventController } from "./controllers/events";

const app = express();

app.use(eventController);

export default app;
