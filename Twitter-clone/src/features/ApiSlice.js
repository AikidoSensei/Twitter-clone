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
    postTweet: builder.mutation({
      query: (tweet) => ({
        url: `/post`,
        method: 'POST',
        body: { tweetText: tweet },
      }),
      invalidatesTags: ['Actions'],
    }),
    getTweet: builder.query({
      query: (id) => `/tweet/${id}`,
      providesTags: ['Actions'],
    }),
    getMyProfile: builder.query({
      query: () => `/myprofile`,
    }),
    getMyTweets: builder.query({
      query: () => `/mytweets`,
      providesTags: ['Actions'],
    }),
    getUser: builder.query({
      query: (id) => `/user/${id}`,
      providesTags: ['Actions'],
    }),
    getUserTweets: builder.query({
      query: (id) => `/usertweets/${id}`,
      providesTags: ['Actions'],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/tweet/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Actions'],
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
    retweetPost: builder.mutation({
      query: (id) => ({
        url: `/retweet/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['Actions'],
    }),
    unretweetPost: builder.mutation({
      query: (id) => ({ url: `/retweet/${id}`, method: 'PATCH' }),
      invalidatesTags: ['Actions'],
    }),
    postReply: builder.mutation({
      query: ({ id, reply }) => ({
        url: `/reply/${id}`,
        method: 'POST',
        body: { replyText: reply },
      }),
      invalidatesTags: ['Actions'],
    }),
    deleteReply: builder.mutation({
      query: ({ tweetId, replyId }) => ({
        url: `/reply/?tweetId=${tweetId}&replyId=${replyId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Actions'],
    }),
    getAllReplies: builder.query({
      query: (id) => `/reply/${id}`,
      providesTags: ['Actions'],
    }),
    likeReply: builder.mutation({
      query: (id) => ({
        url: `/like-reply/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['Actions'],
    }),
    unlikeReply: builder.mutation({
      query: (id) => ({ url: `/like-reply/${id}`, method: 'PATCH' }),
      invalidatesTags: ['Actions'],
    }),
    retweetReply: builder.mutation({
      query: (id) => ({
        url: `/retweet-reply/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['Actions'],
    }),
    unretweetReply: builder.mutation({
      query: (id) => ({ url: `/retweet-reply/${id}`, method: 'PATCH' }),
      invalidatesTags: ['Actions'],
    }),
    follow: builder.mutation({
      query: (id) => ({
        url: `/follow/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['Actions'],
    }),
    unfollow: builder.mutation({
      query: (id) => ({ url: `/follow/${id}`, method: 'PATCH' }),
      invalidatesTags: ['Actions'],
    }),
  }),
})

export const {useGetTweetQuery, useGetAllTweetQuery, usePostTweetMutation,useGetMyProfileQuery, useGetMyTweetsQuery, useGetUserQuery, useGetUserTweetsQuery, useDeletePostMutation, useLikePostMutation, useUnlikePostMutation, useRetweetPostMutation, useUnretweetPostMutation, usePostReplyMutation, useDeleteReplyMutation, useGetAllRepliesQuery, useLikeReplyMutation, useUnlikeReplyMutation, useRetweetReplyMutation, useUnretweetReplyMutation, useFollowMutation, useUnfollowMutation } = apiSlice