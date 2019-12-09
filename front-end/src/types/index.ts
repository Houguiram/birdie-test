export type Tab = 'TABLE' | 'TIMELINE' | 'GRAPHS';

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
