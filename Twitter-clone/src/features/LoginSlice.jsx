import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'




const initialState = {
  user: {},
  isLoggedIn: false,
}

const loginUserSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    user: (state, { payload }) => {

        state.user = payload
        state.isLoggedIn = true
    },
    logout: (state, { payload }) => {
      localStorage.removeItem('usertoken')
      localStorage.removeItem('persist:root')
      state.user = {}
      state.isLoggedIn = false
    },
  },
 
})
export const { user, logout } = loginUserSlice.actions
export default loginUserSlice.reducer
