import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 tweet:false,
 showLogout:false,
 more:false,
 verified:false,
 mobileSideBar: false
}

const popupSlice = createSlice({
 name:'popup',
 initialState,
 reducers:{
  handleTweet:(state)=>{
   state.tweet = !state.tweet
   state.showLogout = false
   state.more = false
   state.verified = false

  },
  handleShowLogout:(state)=>{
   state.showLogout = !state.showLogout
   state.tweet = false
   state.more = false
   state.verified = false
  },
  handleMore:(state)=>{
   state.more = !state.more
   state.tweet = false
   state.showLogout = false
   state.verified = false
  },
  handleVerified:(state)=>{
   state.verified = !state.verified
   state.tweet = false
   state.showLogout = false
   state.more = false
  },
  handleMobile:(state)=>{
  state.mobileSideBar = !state.mobileSideBar
  state.tweet = false
  state.showLogout = false
  state.more = false
  state.verified = false
  },
  clearAll:(state)=>{
   state.tweet = false
   state.showLogout = false
   state.more = false
   state.verified = false
   state.mobileSideBar = false
  }
 }
})
export const { handleTweet, handleShowLogout, handleMore, handleVerified, handleMobile, clearAll } = popupSlice.actions
export default popupSlice.reducer
