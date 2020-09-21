import { createSelector } from "@reduxjs/toolkit";
import { State } from "../store";
import { getSearchInitialState } from "./slicer";

export const searchRootStateSelector = (state: State) => state.search || getSearchInitialState();

export const suggestionsSelector = createSelector(
  searchRootStateSelector,
  ({ suggestions }) => suggestions,
);

export const isSearchFetching = createSelector(
  searchRootStateSelector,
  ({ isFetching }) => isFetching,
);

export const lastSearch = createSelector(
  searchRootStateSelector,
  ({ lastSelection }) => lastSelection,
);
