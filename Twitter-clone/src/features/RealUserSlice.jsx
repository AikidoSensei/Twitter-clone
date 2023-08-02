import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getAllTweets, getMyProfile, getMyTweets, getTweet } from '../axios/RealUsers'

export const realTweets = createAsyncThunk('real/Tweets', getAllTweets)

export const myProfile = createAsyncThunk('my/Profile', getMyProfile)

export const myTweets = createAsyncThunk('my/Tweets', getMyTweets)

export const singleTweet = createAsyncThunk('my/Tweets', getTweet)

const initialState = {
  myProfilePage:{},
  realUsers: [],
  realTweets: [],
  myOwnTweets:[],
  tweet: {},
  isLoggedIn:false,
  isError: false,
}

const realUsersSlice = createSlice({
  name: 'realUsers',
  initialState,
  reducers: {},
  extraReducers: {
    [realTweets.pending]: (state) => {
      state.isLoading = true
    },
    [realTweets.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.realTweets = payload
    },
    [realTweets.rejected]: (state) => {
      state.isLoading = false
      state.isError = true
    },
    [myProfile.pending]: (state) => {
      state.isLoading = true
    },
    [myProfile.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.myProfilePage = payload
    },
    [myProfile.rejected]: (state) => {
      state.isLoading = false
      state.isError = true
    },
    [myTweets.pending]: (state) => {
      state.isLoading = true
    },
    [myTweets.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.myOwnTweets = payload
    },
    [myTweets.rejected]: (state) => {
      state.isLoading = false
      state.isError = true
    }
  },
})

export default realUsersSlice.reducer
