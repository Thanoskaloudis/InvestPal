import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../../utils/models';

const API_BASE_URL = 'http://localhost:5001';

export const api = createApi({
  reducerPath: 'adminApi',
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL
  }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser[], void>({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"]
    })
  })
});

export const { useGetUserQuery }: any = api;