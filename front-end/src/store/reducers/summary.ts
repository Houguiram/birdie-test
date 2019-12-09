import { EventType } from '@App/types';
import { SummaryFetchedAction, SUMMARY_FETCHED } from '../types';

const summary = (state = [] as Array<EventType>, action: SummaryFetchedAction) => {
  switch (action.type) {
    case SUMMARY_FETCHED.SUCCESS:
      return action.payload;
    case SUMMARY_FETCHED.FAIL:
      return action.payload;
    default:
      return state;
  }
};

export default summary;