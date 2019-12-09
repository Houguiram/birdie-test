import { CareRecipient, CareRecipientId, EventType, Tab } from '@App/types';

export const SET_RECIPIENT = 'SET_RECIPIENT';
export const SET_VIEW = 'SET_VIEW';

export const FETCH_SUMMARY = 'FETCH_SUMMARY';
export const FETCH_EVENTS = 'FETCH_EVENTS';

export const RECIPIENTS_FETCHED = {
  SUCCESS: 'RECIPIENTS_FETCH_SUCCEEDED',
  FAIL: 'RECIPIENTS_FETCH_FAILED'
};

export const SUMMARY_FETCHED = {
  SUCCESS: 'SUMMARY_FETCH_SUCCEEDED',
  FAIL: 'SUMMARY_FETCH_FAILED'
};

export const EVENTS_FETCHED = {
  SUCCESS: 'EVENTS_FETCH_SUCCEEDED',
  FAIL: 'EVENTS_FETCH_FAILED'
};

export interface FetchRecipientsAction {
  type: typeof RECIPIENTS_FETCHED.SUCCESS;
  payload: Array<CareRecipient> | string;
}

export interface FetchSummaryAction {
  type: typeof SUMMARY_FETCHED.SUCCESS;
  payload: Array<EventType> | string;
}

export interface FetchEventsAction {
  type: typeof EVENTS_FETCHED.SUCCESS;
  payload: Array<Event> | string;
}

export interface SetViewAction {
  type: typeof SET_VIEW;
  payload: Tab;
}

export interface SetRecipientAction {
  type: typeof SET_RECIPIENT;
  payload: CareRecipientId;
}
