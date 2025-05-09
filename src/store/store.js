import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import formReducer from "./slices/form.slice";
import passwordReducer from "./slices/password.slice";
import authReducer from "./slices/auth.slice";
import menuReducer from "./slices/MenuSlice";
import searchReducer from "./slices/searchSlice";
import filterReducer from "./slices/filter.slice";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  search: searchReducer,
  filter: filterReducer,
  menu: menuReducer,
  form: formReducer,
  passwordVisibility: passwordReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export const { dispatch, getState } = store;
