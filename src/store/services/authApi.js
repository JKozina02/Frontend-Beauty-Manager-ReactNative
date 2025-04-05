import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "";

export const authApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({}),
});

export const { useGetAboutQuery, useGetProjectsQuery, useGetProjectInformationQuery } = api;
