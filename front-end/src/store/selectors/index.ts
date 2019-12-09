import { RootState } from '../reducers';

export const getCurrentRecipientId = (state: RootState) => state.currentRecipient;
export const getCurrentView = (state: RootState) => state.visibleTab;
export const getRecipients = (state: RootState) => state.recipients;
