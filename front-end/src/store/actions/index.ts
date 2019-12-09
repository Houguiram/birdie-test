import {
  FETCH_EVENTS,
  FETCH_SUMMARY,
  FetchEventsAction,
  FetchSummaryAction,
  SET_RECIPIENT,
  SET_VIEW,
  SetRecipientAction,
  SetViewAction
} from '@App/store/types';
import { CareRecipientId, Tab } from '@App/types';

export const setView = (view: Tab): SetViewAction => ({
  type: SET_VIEW,
  payload: view
});

export const setRecipient = (recipientId: CareRecipientId): SetRecipientAction => ({
  type: SET_RECIPIENT,
  payload: recipientId
});

export const fetchSummary = (recipientId: CareRecipientId): FetchSummaryAction => ({
  type: FETCH_SUMMARY,
  payload: recipientId
});

export const fetchEvents = (recipientId: CareRecipientId): FetchEventsAction => ({
  type: FETCH_EVENTS,
  payload: recipientId
});
