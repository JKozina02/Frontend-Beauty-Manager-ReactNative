import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://zwjg64qp11.execute-api.eu-west-1.amazonaws.com/prod";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => "/salons",
    }),
    getSalonsServices: builder.query({
      query: ({ salonId }) => `/salons/${salonId}/services`,
    }),
    getServiceById: builder.query({
      query: ({ salonId, serviceId }) => `/salons/${salonId}/services/${serviceId}`,
    }),
    addFavorite: builder.mutation({
      query: ({ userId, salonId }) => ({
        url: "/favorites",
        method: "POST",
        body: { userId, salonId },
      }),
    }),
    getFavorite: builder.query({
      query: ({ userId }) => `/favorites?userId=${userId}`,
    }),
    deleteFavorite: builder.mutation({
      query: ({ favoriteId }) => ({
        url: `/favorites/${favoriteId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetServicesQuery,
  useAddFavoriteMutation,
  useGetFavoriteQuery,
  useDeleteFavoriteMutation,
  useGetSalonsServicesQuery,
  useGetServiceByIdQuery,
} = productsApi;
