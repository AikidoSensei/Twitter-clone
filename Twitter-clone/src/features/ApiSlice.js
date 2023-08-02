import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURL = 'http://localhost:3000/twitter/clone/main/'

export const apiSlice = createApi({
  reducerPath: 'apiDispatch',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('usertoken')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
        return headers
      }
    },
  }),
  tagTypes: ['Actions'],
  endpoints: (builder) => ({
    getAllTweet: builder.query({
      query: () => `/home`,
      providesTags: ['Actions'],
    }),
    getTweet: builder.query({
      query: (id) => `/tweet/${id}`,
    }),
    getMyProfile: builder.query({
      query: () => `/myprofile`,
    }),
    getMyTweets: builder.query({
      query: () => `/mytweets`,
    }),
    getUser: builder.query({
      query: (id) => `/user/${id}`,
    }),
    likePost: builder.mutation({
      query: (id) => ({
        url: `/like/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['Actions'],
    }),
    unlikePost: builder.mutation({
      query: (id) => ({ url: `/like/${id}`, method: 'PATCH' }),
      invalidatesTags: ['Actions'],
    }),
  }),
})
export const {useGetTweetQuery, useGetAllTweetQuery,useGetMyProfileQuery, useGetMyTweetsQuery, useGetUserQuery, useLikePostMutation, useUnlikePostMutation} = apiSlice