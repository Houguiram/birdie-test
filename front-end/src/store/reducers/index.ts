import { combineReducers } from 'redux';
import visibleTab from './visibleTab';
import currentRecipient from './currentRecipient';
import recipients from './recipients';
import { CareRecipient, CareRecipientId, Tab } from '@App/types';

export type RootState = Readonly<{
  recipients: Array<CareRecipient>,
  currentRecipient: CareRecipientId,
  visibleTab: Tab,
  eventTypes: Array<{id: string, value: number}>,
  events: Array<{}>
}>;

export const rootReducer = combineReducers<RootState>({
  visibleTab,
  currentRecipient,
  recipients
});