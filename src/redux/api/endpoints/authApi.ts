import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: data => ({
        url: 'auth/login',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['auth']
    }),
    userRegister: build.mutation({
      query: data => ({
        url: '/auth/user/register',
        method: 'POST',
        body: data
      })
    }),
  }),
});

export const { useUserLoginMutation, useUserRegisterMutation } = authApi;