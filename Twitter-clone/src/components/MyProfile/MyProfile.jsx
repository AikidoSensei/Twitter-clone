import React from 'react'
import BackBtn from '../smallcomponents/BackBtn'
import './MyProfile.css'
import banner from '../../assets/tasty-hero-wallpaper.jpg'
import niolabrown from '../../assets/niolabrown.jpg'
import Post from '../Center/Post'
const MyProfile = () => {
  return (
    <div className='home-center-wrapper'>
      <div className='profile-blur'>
        <BackBtn />
        <div className='profile-blur-detail'>
          <h3>Niola Brown</h3>
          <p>500 Tweets</p>
        </div>
      </div>
      <div className='profile-media'>
        <img src={banner} className='banner' alt='banner' />
        <img src={niolabrown} className='profile-avatar' alt='profile-avatar' />
        <a className='edit-profile'>Edit profile</a>
      </div>
      <div className='profile-body'>
        <div className='twitter-handle'>
          <h3>Niola Brown</h3>
          <p>@Niola_brown</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          excepturi.
        </p>
        <div className='location-joined'>
          <span>
            <i className='fa-solid fa-location-dot'></i>Location
          </span>
          <span>
            <i className='fa-solid fa-calendar-days'/>Joined July 2023
          </span>
        </div>
        <div className='profile-followers'>
          <span>
            1000<span>Following</span>
          </span>
          <span>
            5586<span>Followers</span>
          </span>
        </div>
        <div className='profile-base'>
          <h3>Tweets</h3>
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
      </div>
    </div>
  )
}

export default MyProfile