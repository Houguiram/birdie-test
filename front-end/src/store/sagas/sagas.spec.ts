import { fetchEvents, fetchEventTypesSummary, fetchRecipients, watchFetchEvents, watchFetchSummary } from './index';
import { call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_EVENTS, FETCH_SUMMARY } from "@App/store/types";

describe('When fetching recipients', () => {
  const gen = fetchRecipients();
  it('gets recipients endpoint', () => {
    expect(gen.next().value).toEqual(call(axios.get, '/recipients'));
  });
  it('dispatch an action', () => {
    expect(gen.next().value.type).toEqual('PUT');
  });
});

describe('When fetching summary', () => {
  const gen = fetchEventTypesSummary({type: FETCH_SUMMARY, payload: '1'});
  it('gets summary endpoint for recipient', () => {
    expect(gen.next().value).toEqual(call(axios.get, '/recipients/1/summary'));
  });
  it('dispatch an action', () => {
    expect(gen.next().value.type).toEqual('PUT');
  });
});

describe('When fetching events', () => {
  const gen = fetchEvents({type: FETCH_EVENTS, payload: {recipientId: '1', pageNb: 2}});
  it('gets events endpoint for recipient and page number', () => {
    expect(gen.next().value).toEqual(call(axios.get, '/recipients/1/events/2'));
  });
  it('dispatch an action', () => {
    expect(gen.next().value.type).toEqual('PUT');
  });
});

describe('When watching fetch summay', () => {
  const gen = watchFetchSummary();
  it('takes latest fetch summary action', () => {
    expect(gen.next().value).toEqual(takeLatest(FETCH_SUMMARY, fetchEventTypesSummary));
  });
});

describe('When watching fetch events', () => {
  const gen = watchFetchEvents();
  it('takes latest fetch events action', () => {
    expect(gen.next().value).toEqual(takeLatest(FETCH_EVENTS, fetchEvents));
  });
});
