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
    singleTrip: build.query({
      query: (tripId) => ({
        url: `/trips/${tripId}`,
        method: 'GET'
      }),
      providesTags: ['trip']
    }),
    postTrip: build.mutation({
      query: (data) => ({
        url: '/trips',
        method: 'POST',
        data: data
      }),
      invalidatesTags: ['trip']
    }),
    updateTrip: build.mutation({
      query: ({ tripId, data }) => ({
        url: `/trips/${tripId}`,
        method: 'PUT',
        data: data
      })
    })
  })
});

export const { useAllTripQuery, usePostTripMutation, useUpdateTripMutation, useSingleTripQuery } = tripApi;