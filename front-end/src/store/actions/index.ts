import {
  FETCH_EVENTS,
  FETCH_SUMMARY,
  SummaryFetchedAction,
  SET_RECIPIENT,
  SET_VIEW,
  SetRecipientAction,
  SetViewAction, FetchEventsAction
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

export const fetchSummary = (recipientId: CareRecipientId): SummaryFetchedAction => ({
  type: FETCH_SUMMARY,
  payload: recipientId
});

export const fetchEvents = (recipientId: CareRecipientId, pageNb: number): FetchEventsAction => ({
  type: FETCH_EVENTS,
  payload: {
    recipientId: recipientId,
    pageNb: pageNb
  }
});
