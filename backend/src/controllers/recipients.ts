import * as express from "express";

const dbConfig = require("../dbConfig");
const connection = require("../helpers/connection");
const query = require("../helpers/query");

export const recipientController = express.Router();

recipientController.get('/recipients', async (_, res) => {
  const conn = await connection(dbConfig);
  const ids = await query(conn, 'select distinct care_recipient_id from events');
  const recipients = ids.map((recipient: {care_recipient_id: string}, index: number) => ({id: recipient.care_recipient_id, name: 'recipient_'+index.toString()}));
  res.status(200).json({recipients});
});
