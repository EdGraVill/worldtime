import { combineReducers, configureStore, DeepPartial, getDefaultMiddleware, StateFromReducersMapObject } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { timeReducer, timeReducerName, timeSagas } from "../WorldTime";
import { searchReducer, searchReducerName, searchSagas } from "../Search";

export const mapReducers = {
  [timeReducerName]: timeReducer,
  [searchReducerName]: searchReducer,
};

export type State = StateFromReducersMapObject<typeof mapReducers>;

export const setupStore = (preloadedState?: DeepPartial<State>) => {
  const sagaMiddleware = createSagaMiddleware();
  
  const store = configureStore({
    reducer: combineReducers(mapReducers),
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
    preloadedState,
  });

  sagaMiddleware.run(timeSagas);
  sagaMiddleware.run(searchSagas);

  return store;
};
