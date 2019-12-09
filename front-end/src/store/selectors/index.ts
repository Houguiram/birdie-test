import { RootState } from '../reducers';

export const getCurrentRecipientId = (state: RootState) => state.currentRecipient;
export const getCurrentView = (state: RootState) => state.visibleTab;
