import { combineReducers } from 'redux';
import visibleTab from './visibleTab';
import currentRecipient from './currentRecipient';
import recipients from './recipients';
import summary from './summary';
import events from './events';
import { CareRecipient, CareRecipientId, Tab } from '@App/types';

export type RootState = Readonly<{
  recipients: Array<CareRecipient>,
  currentRecipient: CareRecipientId,
  visibleTab: Tab,
  summary: Array<{ id: string, value: number }>,
  events: Array<{}>,
  eventsPageNb: number
}>;

export const rootReducer = combineReducers<RootState>({
  visibleTab,
  currentRecipient,
  recipients,
  summary,
  events
});