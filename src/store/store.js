import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import formReducer from "./slices/form.slice";
import passwordReducer from "./slices/password.slice";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  form: formReducer,
  passwordVisibility: passwordReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export const { dispatch, getState } = store;
