import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    // Register User
    registerUser: builder.mutation({
      query: (registerPayload) => ({
        url: 'auth/register', 
        method: 'POST',
        body: registerPayload,
      }),
    }),

    // Login User
    loginUser: builder.mutation({
      query: (loginPayload) => ({
        url: '/auth/login', 
        method: 'POST',
        body: loginPayload,
      }),
    }),
  }),
})

// Export hooks for usage in components
export const { useRegisterUserMutation, useLoginUserMutation } = userApi
