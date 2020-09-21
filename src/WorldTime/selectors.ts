import { createSelector } from '@reduxjs/toolkit';
import { State } from '../store';
import { getTimeInitialState } from './slicer';

export const timeRootStateSelector = (state: State) => state.time || getTimeInitialState();

export const timezoneListSelector = createSelector(
  timeRootStateSelector,
  ({ list }) => list,
);

export const homeTimezoneSelector = createSelector(
  timeRootStateSelector,
  ({ home, list }) => list.find(({ timezone }) => timezone === home) || null,
);

export const selectedTimezoneSelector = createSelector(
  timeRootStateSelector,
  ({ selected }) => selected,
);

export const timezoneSelector = (timezone: string) => createSelector(
  timeRootStateSelector,
  ({ list }) => list.find(tz => tz.timezone === timezone) || null,
);
