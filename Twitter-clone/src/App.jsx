import React, { useEffect } from 'react'
import SideBar from './components/SideBar/SideBar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeCenter from './components/Center/HomeCenter'
import Trend from './components/Trend/Trend'
import MobileNavBar from './components/smallcomponents/MobileNavBar'
import MyProfile from './components/MyProfile/MyProfile'
import Explore from './components/Explore/Explore'
import Notifications from './components/Notifications/Notifications'
import Lists from './components/Lists/Lists'
import BookMarks from './components/BookMarks/BookMarks'
import Messages from './components/Messages/Messages'
import Verified from './components/Popups/Verified'
import Tweet from './components/Popups/Tweet'
import MobileSideBar from './components/MobileSideBar/MobileSideBar'
import SharedComponent from './components/SharedComponent'
import { useSelector, useDispatch } from 'react-redux'
import SingleTweet from './components/SingleTweet/SingleTweet'
import UserProfile from './components/UserProfile/UserProfile'
import Login from './components/LoginSignUp/Login'
import SignUp from './components/LoginSignUp/SignUp'
import ProtectedRoutes from './ProtectedRoute'
import { mockData } from './features/MockUserSlice'

import DeleteTweet from './components/Popups/DeleteTweet'
import DeleteReply from './components/Popups/DeleteReply'
import Welcome from './components/Welcome/Welcome'
import Error from './components/Error/Error'
import ErrorOccured from './components/smallcomponents/ErrorOccured'
import UserError from './components/smallcomponents/UserError'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(mockData())
  }, [])

  const {
    tweet,
    showLogout,
    more,
    verified,
    mobileSideBar,
    confirmDelete,
    confirmDeleteReply,
    deleteId,
    errorOccured,
    mockUserError
  } = useSelector((store) => store.popup)

  return (
    <main className='homepage-layout'>
      <BrowserRouter>
        {MobileSideBar && <MobileSideBar />}
        {tweet && <Tweet />}
        {verified && <Verified />}
        {confirmDelete && <DeleteTweet id={deleteId} />}
        {confirmDeleteReply && <DeleteReply />}
        {errorOccured && <ErrorOccured />}
        {mockUserError && <UserError/>}
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<SharedComponent />}>
              <Route path='/' index element={<HomeCenter />} />
              <Route path='home' element={<HomeCenter />} />
              <Route path='profile' element={<MyProfile />} />
              <Route path='explore' element={<Explore />} />
              <Route path='notifications' element={<Notifications />} />
              <Route path='lists' element={<Lists />} />
              <Route path='bookmarks' element={<BookMarks />} />
              <Route path='messages' element={<Messages />} />
              <Route path='tweet/:id' element={<SingleTweet />} />
              <Route path='user/:id' element={<UserProfile />} />
              {/* <Route path='*' element={<Error />} /> */}
            </Route>
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='welcome' element={<Welcome />} />
          <Route path='signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
