import { Event } from '@App/types';
import { EVENTS_FETCHED, FetchEventsAction } from '../types';

const events = (state = [] as Array<Event>, action: FetchEventsAction) => {
  switch (action.type) {
    case EVENTS_FETCHED.SUCCESS:
      return action.payload;
    case EVENTS_FETCHED.FAIL:
      return action.payload;
    default:
      return state;
  }
};

export default events;