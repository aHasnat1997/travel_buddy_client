import { baseApi } from "../baseApi";

export const tripApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allTrip: build.query({
      query: () => ({
        url: '/trips',
        method: 'GET'
      }),
      providesTags: ['trip']
    }),
    postTrip: build.mutation({
      query: (data) => ({
        url: '/trips',
        method: 'POST',
        body: data
      })
    })
  })
});

export const { useAllTripQuery, usePostTripMutation } = tripApi;