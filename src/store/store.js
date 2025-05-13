import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import formReducer from "./slices/form.slice";
import passwordReducer from "./slices/password.slice";
import authReducer from "./slices/auth.slice";
import menuReducer from "./slices/MenuSlice";
import searchReducer from "./slices/searchSlice";
import filterReducer from "./slices/filter.slice";
import { productsApi } from "./services/productsApi";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  search: searchReducer,
  filter: filterReducer,
  menu: menuReducer,
  form: formReducer,
  passwordVisibility: passwordReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware),
});

export const { dispatch, getState } = store;
