import { combineReducers, configureStore } from "@reduxjs/toolkit";
import apiAuth from "./services/authApi";

export const rootReducer = combineReducers({
  [apiAuth.reducerPath]: apiAuth.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(api.middleware),
});

export const { dispatch, getState } = store;
