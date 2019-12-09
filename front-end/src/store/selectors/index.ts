import { RootState } from '../reducers';

export const getCurrentRecipientId = (state: RootState) => state.currentRecipientId;
export const getCurrentView = (state: RootState) => state.visibleTab;
