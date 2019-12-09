import { CareRecipient } from '@App/types';
import { FetchRecipientsAction, RECIPIENTS_FETCHED } from '../types';

const recipients = (state = [] as Array<CareRecipient>, action: FetchRecipientsAction) => {
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