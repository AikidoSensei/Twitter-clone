import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { apiSlice } from './features/ApiSlice'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider api={apiSlice}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApiProvider>
)
