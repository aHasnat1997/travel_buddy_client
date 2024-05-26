// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://travelbuddyserver-ahasnat1997s-projects.vercel.app/api' }),
  endpoints: () => ({}),
  tagTypes: ['trip', 'auth']
});
