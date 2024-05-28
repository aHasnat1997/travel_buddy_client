import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userRegister: build.mutation({
      query: data => ({
        url: '/auth/user/register',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['auth']
    }),

    userLogin: build.mutation({
      query: data => ({
        url: '/auth/login',
        method: 'POST',
        credentials: 'include',
        body: data
      }),
      invalidatesTags: ['auth']
    }),

    userLogout: build.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
        credentials: 'include',
      }),
      invalidatesTags: ['auth']
    }),
  }),
});

export const { useUserLoginMutation, useUserRegisterMutation, useUserLogoutMutation } = authApi;