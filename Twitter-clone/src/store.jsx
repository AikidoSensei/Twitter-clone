import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import { setupListeners } from '@reduxjs/toolkit/query'

import popupReducer from './features/PopupSlice'
import mockUsersReducer from './features/MockUserSlice'
import realUsersReducer from './features/RealUserSlice'
import loginUserReducer from './features/LoginSlice'
import { apiSlice } from './features/ApiSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, loginUserReducer)

export const store = configureStore({
  reducer: {
    loginUser: persistedReducer,
    popup: popupReducer,
    mockUsers: mockUsersReducer,
    realUsers: realUsersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
export const persistor = persistStore(store)
setupListeners(store.dispatch)