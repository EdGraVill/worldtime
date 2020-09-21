import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TimeZone } from "../commonTypes";
import { mergeToLeftWithKey, preserve, recover } from "../util";

export const getTimeInitialState = () => ({
  home: recover<string | null>('time/home', null),
  isFetching: false as boolean,
  list: recover<TimeZone[]>('time/list', []),
  selected: recover<string[]>('time/selected', []),
});

export type TimeState = ReturnType<typeof getTimeInitialState>;

export const { actions: timeActions, name: timeReducerName, reducer: timeReducer } = createSlice({
  initialState: getTimeInitialState(),
  name: 'time',
  reducers: {
    fetchTimezone(state, action: PayloadAction<string>) {
      state.isFetching = true;
    },
    fulfillTimezone(state, { payload }: PayloadAction<TimeZone>) {
      state.isFetching = false;
      state.list = preserve('time/list', mergeToLeftWithKey(state.list, payload.timezone ? [payload] : [], 'timezone'));
    },
    setHomeTimezone(state, { payload }: PayloadAction<string>) {
      const selectedIx = state.selected.indexOf(payload);

      if (selectedIx >= 0 && state.home) {
        state.selected[selectedIx] = state.home;
      }

      state.home = preserve('time/home', payload);
      state.selected = preserve('time/selected', state.selected);
    },
    switchTimezone(state, { payload }) {
      const selectedIx = state.selected.indexOf(payload);

      if (selectedIx === -1) {
        state.selected.push(payload);
      } else {
        state.selected.splice(selectedIx, 1);
      }

      preserve('time/selected', state.selected);
    },
  },
});
