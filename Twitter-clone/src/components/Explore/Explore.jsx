import React from 'react'
import BackBtn from '../smallcomponents/BackBtn'
import './Explore.css'
import banner from '../../assets/tasty-hero-wallpaper.jpg'
import niolabrown from '../../assets/niolabrown.jpg'
import Post from '../Center/Post'
import SearchBar from '../smallcomponents/SearchBar'
import MobileNavBar from '../smallcomponents/MobileNavBar'
import { useDispatch } from 'react-redux'
import { handleMobile } from '../../features/PopupSlice'
const Explore = () => {
  const dispatch = useDispatch()
  return (
    <div className='home-center-wrapper'>
      <div className='profile-blur'>
        <div className='avatar-container'>
          <img
            src={niolabrown}
            className='mobile-avatar'
            alt='mobile-avatar'
            onClick={(e) => {
              e.stopPropagation()
              dispatch(handleMobile())
            }}
          />
        </div>
        <div className='search-bar '>
          <i className='fa-solid fa-magnifying-glass' />
          <input type='text' placeholder='Search Twitter' />
        </div>
      </div>
      <div className='center-trends main-trends'>
        <h2>Trends for you</h2>
        <div className='trend'>
          <div className='title-trend'>
            <p>Sports Trending</p>
            <i className='fa fa-ellipsis-h post-ellipsis' />
          </div>
          <div className='body-trend'>
            <h4>Leo Messi</h4>
            <p>3000 Tweets</p>
          </div>
        </div>
        <div className='trend'>
          <div className='title-trend'>
            <p>Sports Trending</p>
            <i className='fa fa-ellipsis-h post-ellipsis' />
          </div>
          <h4>Leo Messi</h4>
          <p>3000 Tweets</p>
        </div>
        <div className='trend'>
          <div className='title-trend'>
            <p>Sports Trending</p>
            <i className='fa fa-ellipsis-h post-ellipsis' />
          </div>
          <h4>Leo Messi</h4>
          <p>3000 Tweets</p>
        </div>
        <div className='trend'>
          <div className='title-trend'>
            <p>Sports Trending</p>
            <i className='fa fa-ellipsis-h post-ellipsis' />
          </div>
          <h4>Leo Messi</h4>
          <p>3000 Tweets</p>
        </div>
      </div>
      <div className='tweet-container'>
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
      <div className='mobile-nav-fixed'>
        <MobileNavBar />
      </div>
    </div>
  )
}

export default Explore
