import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export const { dispatch, getState } = store;
