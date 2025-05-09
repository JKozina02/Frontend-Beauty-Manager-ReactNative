import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://zwjg64qp11.execute-api.eu-west-1.amazonaws.com/prod";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => "/salons",
    }),
  }),
});

export const { useGetServicesQuery } = productsApi;
