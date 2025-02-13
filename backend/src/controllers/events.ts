import * as express from "express";

const dbConfig = require("../dbConfig");
const connection = require("../helpers/connection");
const query = require("../helpers/query");

export const eventController = express.Router();

eventController.get('/event-types', async (_, res) => {
  const conn = await connection(dbConfig);
  const results = await query(conn, 'select event_type, count(*) from events group by event_type');
  res.status(200).json({results});
  conn.end();
});
