import currentRecipient from "./currentRecipient";
import {
  EVENTS_FETCHED,
  EventsFetchedAction, RECIPIENTS_FETCHED,
  RecipientsFetchedAction,
  SET_RECIPIENT,
  SetRecipientAction, SUMMARY_FETCHED, SummaryFetchedAction
} from "@App/store/types";
import events from "./events";
import recipients from "./recipients";
import summary from "./summary";

describe('currentRecipients reducer', () => {
  it('should return the initial state', () => {
    expect(currentRecipient(undefined, {} as SetRecipientAction)).toEqual('');
  });
  it('should handle SET_RECIPIENT', () => {
    expect(currentRecipient('1', {
      type: SET_RECIPIENT,
      payload: '2'
    })).toEqual('2');
  });
});

describe('events reducer', () => {
  it('should return the initial state', () => {
    expect(events(undefined, {} as EventsFetchedAction)).toEqual([]);
  });
  it('should handle EVENT_FETCHED.SUCCESS', () => {
    const testEvent = {id: '1', caregiver_id: '2', timestamp: '0:0', event_type: 'test_event', payload: 'content'};
    expect(events([], {
      type: EVENTS_FETCHED.SUCCESS,
      payload: [testEvent]
    })).toEqual([testEvent]);
  });
});

describe('recipients reducer', () => {
  it('should return the initial state', () => {
    expect(recipients(undefined, {} as RecipientsFetchedAction)).toEqual([]);
  });
  it('should handle RECIPIENTS_FETCHED.SUCCESS', () => {
    const testRecipient = {id: '1', name: 'Test Recipient'};
    expect(recipients([], {
      type: RECIPIENTS_FETCHED.SUCCESS,
      payload: [testRecipient]
    })).toEqual([testRecipient]);
  });
});

describe('summary reducer', () => {
  it('should return the initial state', () => {
    expect(summary(undefined, {} as SummaryFetchedAction)).toEqual([]);
  });
  it('should handle SUMMARY_FETCHED.SUCCESS', () => {
    const testEventType = {id: 'test_event_type', value: 10};
    expect(summary([], {
      type: SUMMARY_FETCHED.SUCCESS,
      payload: [testEventType]
    })).toEqual([testEventType]);
  });
});
