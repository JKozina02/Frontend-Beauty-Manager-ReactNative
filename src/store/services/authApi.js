import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://zwjg64qp11.execute-api.eu-west-1.amazonaws.com/prod/users";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({}),
});

// eslint-disable-next-line no-empty-pattern
export const {} = authApi;
