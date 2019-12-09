import { CareRecipient } from '@App/types';
import { RecipientsFetchedAction, RECIPIENTS_FETCHED } from '../types';

const recipients = (state = [] as Array<CareRecipient>, action: RecipientsFetchedAction) => {
  switch (action.type) {
    case RECIPIENTS_FETCHED.SUCCESS:
      return action.payload;
    case RECIPIENTS_FETCHED.FAIL:
      return action.payload;
    default:
      return state;
  }
};

export default recipients;