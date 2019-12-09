import { CareRecipientId } from '@App/types';
import { SET_RECIPIENT, SetRecipientAction } from '../types';

const currentRecipient = (state = '' as CareRecipientId, action: SetRecipientAction) => {
  switch (action.type) {
    case SET_RECIPIENT:
      return action.payload;
    default:
      return state;
  }
};

export default currentRecipient;