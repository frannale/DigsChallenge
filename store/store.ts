import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { api } from './api';

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: getDefaultMiddleware => {
      const middlewares = [api.middleware];
      return getDefaultMiddleware().concat(middlewares);
    },
  });
  return store;
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
