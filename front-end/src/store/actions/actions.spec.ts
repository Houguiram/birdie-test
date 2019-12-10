import * as actions from "./index";
import { FETCH_EVENTS, FETCH_SUMMARY, SET_RECIPIENT, SET_VIEW } from "@App/store/types";

describe('actions', () => {
  it('should create an action to set the current view', () => {
    const view = 'TABLE';
    const expectedAction = {
      type: SET_VIEW,
      payload: view
    };
    expect(actions.setView(view)).toEqual(expectedAction)
  });
  it('should create an action to fetch the summary', () => {
    const recipientId = '1';
    const expectedAction = {
      type: FETCH_SUMMARY,
      payload: recipientId
    };
    expect(actions.fetchSummary(recipientId)).toEqual(expectedAction)
  });
  it('should create an action to fetch events of recipients at given page', () => {
    const recipientId = '1';
    const pageNb = 2;
    const expectedAction = {
      type: FETCH_EVENTS,
      payload: {
        recipientId: recipientId,
        pageNb: pageNb
      }
    };
    expect(actions.fetchEvents(recipientId, pageNb)).toEqual(expectedAction)
  });
  it('should create an action to set the current recipient', () => {
    const recipientId = '1';
    const expectedAction = {
      type: SET_RECIPIENT,
      payload: recipientId
    };
    expect(actions.setRecipient(recipientId)).toEqual(expectedAction)
  });
});