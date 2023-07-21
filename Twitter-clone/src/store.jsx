import { configureStore } from '@reduxjs/toolkit'
import popupReducer from './features/PopupSlice'
export const store = configureStore({
 reducer:{
  popup:popupReducer
 }
})