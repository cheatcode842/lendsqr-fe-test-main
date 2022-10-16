import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../types';

const baseUrl = process.env.REACT_APP_API_BASEURL;
// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    fetchAllUsers: builder.query<User, string>({
      query: (page = 'page=1&limit=10') => `/users?${page}`,
    }),
    fetchOneUser: builder.query<User, string>({
      query: (id: string) => `/users/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFetchAllUsersQuery, useFetchOneUserQuery } = userApi;
