export type Tab = 'TABLE' | 'GRAPHS';

export type CareRecipientId = string;
export type CareRecipient = { id: CareRecipientId, name: string };

export type EventType = {
  id: string;
  value: number;
};

export type RawEventType = {
  event_type: string;
  'count(*)': number;
};

export type Event = {
  id: string;
  caregiver_id: string;
  timestamp: string;
  event_type: string;
  payload: string;
};
