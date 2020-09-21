import { call, put, takeLatest } from "redux-saga/effects";
import { getAvailableTimezones } from "../api";
import { searchActions } from "./slicer";

export function* fetchSuggestionsEffect() {
  const suggestions: string[] = yield call(getAvailableTimezones);

  yield put(searchActions.fulfillSuggestions(suggestions));
}

export function* searchSagas() {
  yield takeLatest(searchActions.fetchSuggestions.type, fetchSuggestionsEffect);
}
