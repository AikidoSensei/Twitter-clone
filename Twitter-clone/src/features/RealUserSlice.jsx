import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'





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
  },
})

export default realUsersSlice.reducer
