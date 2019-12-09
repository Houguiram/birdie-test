import { CareRecipientId, Tab } from '@App/types';

export const SET_RECIPIENT = 'SET_RECIPIENT';
export const SET_VIEW = 'SET_VIEW';

export const FETCH_RECIPIENTS = 'FETCH_RECIPIENTS';
export const FETCH_SUMMARY = 'FETCH_SUMMARY';
export const FETCH_EVENTS = 'FETCH_EVENTS';

export interface FetchSummaryAction {
  type: typeof FETCH_SUMMARY;
  payload: CareRecipientId;
}

export interface FetchEventsAction {
  type: typeof FETCH_EVENTS;
  payload: CareRecipientId;
}

export interface SetViewAction {
  type: typeof SET_VIEW;
  payload: Tab;
}

export interface SetRecipientAction {
  type: typeof SET_RECIPIENT;
  payload: CareRecipientId;
}
