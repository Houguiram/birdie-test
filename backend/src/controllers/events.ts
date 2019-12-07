import * as express from "express";

export const eventController = express.Router();
const eventTypesStub = [
  {
    id: 'Task completed',
    value: 158
  },
  {
    id: 'Check out',
    value: 130
  },
  {
    id: 'Check in',
    value: 40
  }
];

eventController.get('/event-types', (_, res) => {
  res.status(200).json(eventTypesStub);
});
