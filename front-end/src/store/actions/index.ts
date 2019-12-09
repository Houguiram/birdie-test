import { SET_VIEW, SET_RECIPIENT, SetViewAction, SetRecipientAction } from '@App/store/types';
import { Tab } from '@App/types';

export const setView = (view: Tab): SetViewAction => ({
  type: SET_VIEW,
  payload: view
});

export const setRecipient = (recipientId: string): SetRecipientAction => ({
  type: SET_RECIPIENT,
  payload: recipientId
});
