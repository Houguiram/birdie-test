import { Event } from '@App/types';
import { EVENTS_FETCHED, EventsFetchedAction } from '../types';

const events = (state = [] as Array<Event>, action: EventsFetchedAction) => {
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