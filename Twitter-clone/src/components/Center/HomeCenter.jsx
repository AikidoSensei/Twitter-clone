import React from 'react'
import Blur from '../smallcomponents/Blur'
import './HomeCenter.css'
import QuickTweet from '../smallcomponents/QuickTweet'
import Post from './Post'
import MobileNavBar from '../smallcomponents/MobileNavBar'
import MobileSideBar from '../MobileSideBar/MobileSideBar'
import { useSelector } from 'react-redux'

const HomeCenter = () => {
 const { mobileSideBar } = useSelector((store) => store.popup)

  return (
    <main className='home-center-wrapper'>
      <MobileSideBar />
      <div className='home-center-container'>
        <Blur />
        <div className='tweets-container'>
          <QuickTweet />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </main>
  )
}

export default HomeCenter
