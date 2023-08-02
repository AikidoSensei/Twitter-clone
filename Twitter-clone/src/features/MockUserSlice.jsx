import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import mockUser, { getMockData, getMockUser } from '../axios/MockUsers'

export const mockData = createAsyncThunk ('mock/mockUsers', getMockData)

export const mockUserData = createAsyncThunk ('mock/mockUser', getMockUser)

const initialState = {
 mockUsers:[],
 mockUser:[],
 mockTweets:[],
 mockTweet:{},
 isLoading:false,
 isError:false,
}

const mockUsersSlice = createSlice({
 name:'mockUsers',
 initialState,
 reducers:{
  getTweet:(state, {payload})=>{
   state.mockTweet = payload
  },
  getUser:(state, {payload})=>{
   console.log(state.mockUsers);
   state.mockUser = state.mockUsers.find((user)=>user.username === id)
   console.log(state.mockUser)
  }
 },
 extraReducers:{
  [mockData.pending]:(state)=>{
   state.isLoading = true
  },
  [mockData.fulfilled]:(state, {payload})=>{
   state.isLoading = false
   state.mockUsers = payload
   const testTweet = payload.map((item)=>{
    const x = Math.floor(Math.random() * 2)
    return {
     name:item.name,
     username:item.username,
     avatar:item.profile_image,
     likes:item.tweets[x].likes,
     tweet:item.tweets[x].tweet,
     views:item.tweets[x].views,
     retweets:item.tweets[x].retweets,
     comments:item.tweets[x].comments,
     image:item.tweets[x].post_image
    }
   }
   )
   state.mockTweets = testTweet

  },
  [mockData.rejected]:(state)=>{
   state.isLoading = false
   state.isError = true
  },
  [mockUserData.pending]:(state)=>{
   state.isLoading = true
  },
  [mockUserData.fulfilled]:(state, {payload})=>{
   state.isLoading = false
   state.mockUser = payload;
  },
  [mockUserData.rejected]:(state)=>{
   state.isLoading = false
   state.isError = true
  },
 }
})

export const {getTweet, getUser} = mockUsersSlice.actions
export default mockUsersSlice.reducer