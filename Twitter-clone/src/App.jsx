import React from 'react'
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
import SharedLayout from './components/SharedLayout'
import { useSelector, useDispatch } from 'react-redux'
import SingleTweet from './components/SingleTweet/SingleTweet'
const App = () => {
  const { tweet, showLogout, more, verified, mobileSideBar } = useSelector(
    (store) => store.popup
  )
  return (
    <main className='homepage-layout'>
      <BrowserRouter>
        <SideBar />
        {MobileSideBar && <MobileSideBar/>}
        {tweet && <Tweet />}
        {verified && <Verified />}
        <Routes>
          <Route path='/' element={<SharedLayout />} />
          <Route index element={<HomeCenter />} />
          <Route path='profile' element={<MyProfile />} />
          <Route path='explore' element={<Explore />} />
          <Route path='home' element={<HomeCenter />} />
          <Route path='notifications' element={<Notifications />} />
          <Route path='lists' element={<Lists />} />
          <Route path='bookmarks' element={<BookMarks />} />
          <Route path='messages' element={<Messages />} />
          <Route path='tweet' element={<SingleTweet/>} />
        </Routes>
        <Trend />
        <MobileNavBar />
      </BrowserRouter>
    </main>
  )
}

export default App
