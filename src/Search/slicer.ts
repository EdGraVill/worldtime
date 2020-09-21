import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { preserve, recover } from "../util";

export const getSearchInitialState = () => ({
  isFetching: false,
  lastSelection: null as string | null,
  suggestions: recover<string[]>('search/suggestions', []),
});

export type SearchState = ReturnType<typeof getSearchInitialState>;

export const { actions: searchActions, name: searchReducerName, reducer: searchReducer } = createSlice({
  initialState: getSearchInitialState(),
  name: 'search',
  reducers: {
    fetchSuggestions(state) {
      state.isFetching = true;
    },
    fulfillSuggestions(state, { payload }: PayloadAction<string[]>) {
      state.isFetching = false;
      state.suggestions = preserve('search/suggestions', payload);
    },
    setLastSelection(state, { payload }: PayloadAction<string>) {
      state.lastSelection = payload;
    },
  },
});
