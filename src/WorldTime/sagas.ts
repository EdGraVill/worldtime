import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getTimezone } from '../api';
import { TimeZone } from '../commonTypes';
import { searchActions } from '../Search';
import { homeTimezoneSelector, selectedTimezoneSelector } from './selectors';
import { timeActions } from './slicer';

export function* fetchTimezoneEffect({ payload }: ReturnType<typeof timeActions.fetchTimezone>) {
  const timeZone: TimeZone = yield call(getTimezone, payload);

  yield put(timeActions.fulfillTimezone(timeZone));
}

export function* setSearchEffect({ payload }: ReturnType<typeof searchActions.setLastSelection>) {
  const selected: string[] = yield select(selectedTimezoneSelector);
  const home: TimeZone = yield select(homeTimezoneSelector);

  console.log(payload);

  if (selected.indexOf(payload) === -1 && home.timezone !== payload) {
    yield put(timeActions.switchTimezone(payload));
  }
}

export function* timeSagas() {
  yield takeEvery(timeActions.fetchTimezone.type, fetchTimezoneEffect);
  yield takeEvery(searchActions.setLastSelection.type, setSearchEffect)
}
