import { call, put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

import {
  EVENTS_FETCHED,
  FETCH_EVENTS,
  FETCH_SUMMARY,
  RecipientsFetchedAction,
  SummaryFetchedAction,
  RECIPIENTS_FETCHED, SUMMARY_FETCHED, FetchEventsAction
} from '../types';
import { CareRecipient, RawEventType } from '@App/types';
import { sentenceCase } from 'sentence-case';

function* fetchRecipients() {
  try {
    const recipientsResults = yield call(axios.get, '/recipients');
    yield put({
      type: RECIPIENTS_FETCHED.SUCCESS,
      payload: recipientsResults.data.recipients as Array<CareRecipient>
    } as RecipientsFetchedAction);
  } catch (e) {
    yield put({type: RECIPIENTS_FETCHED.FAIL, payload: e.message});
  }
}

function* fetchEventTypesSummary(action: SummaryFetchedAction) {
  try {
    const evTypSumResults = yield call(axios.get, `/recipients/${action.payload}/summary`);
    yield put({
      type: SUMMARY_FETCHED.SUCCESS, payload: evTypSumResults.data.results.map((evTyp: RawEventType) => ({
        id: sentenceCase(evTyp.event_type),
        value: evTyp['count(*)']
      }))
    });
  } catch (e) {
    yield put({type: SUMMARY_FETCHED.FAIL, payload: e.message});
  }
}

function* watchFetchSummary() {
  yield takeLatest(FETCH_SUMMARY, fetchEventTypesSummary);
}

function* fetchEvents(action: FetchEventsAction) {
  try {
    const query = `/recipients/${action.payload.recipientId}/events/${action.payload.pageNb}`;
    const eventsResults = yield call(axios.get, query);
    yield put({type: EVENTS_FETCHED.SUCCESS, payload: eventsResults.data.results});
  } catch (e) {
    yield put({type: EVENTS_FETCHED.FAIL, payload: e.message});
  }
}

function* watchFetchEvents() {
  yield takeLatest(FETCH_EVENTS, fetchEvents);
}

function* initSaga() {
  yield all([
    fetchRecipients(),
    watchFetchSummary(),
    watchFetchEvents()
  ]);
}

export default initSaga;