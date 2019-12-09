import * as express from "express";

const dbConfig = require("../dbConfig");
const connection = require("../helpers/connection");
const query = require("../helpers/query");

export const recipientController = express.Router();

recipientController.get('/recipients', async (_, res) => {
  const conn = await connection(dbConfig);
  const ids = await query(conn, 'select distinct care_recipient_id from events');
  const recipients = ids.map((recipient: { care_recipient_id: string }, index: number) => ({
    id: recipient.care_recipient_id,
    name: 'recipient_' + index.toString()
  }));
  res.status(200).json({recipients});
  conn.end();
});

recipientController.get('/recipients/:recipientId/events', async (req, res) => {
  const conn = await connection(dbConfig);
  const results = await query(conn, `select id, caregiver_id, timestamp, event_type from events where care_recipient_id = '${req.params.recipientId}' order by timestamp  asc`);
  res.status(200).json({results});
  conn.end();
});

recipientController.get('/recipients/:recipientId/summary', async (req, res) => {
  const conn = await connection(dbConfig);
  const results = await query(conn, `select event_type, count(*) from events where care_recipient_id = '${req.params.recipientId}' group by event_type`);
  res.status(200).json({results});
  conn.end();
});
