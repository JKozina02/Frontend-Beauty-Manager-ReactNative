import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import menuReducer from "./slices/MenuSlice";
import searchReducer from "./slices/searchSlice";
import filterReducer from "./slices/filterSlice";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  search: searchReducer,
  filter: filterReducer,
  menu: menuReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export const { dispatch, getState } = store;
