import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import icon from '../../../assets/icon.png'
import niolabrown from '../../../assets/niolabrown.jpg'
import Verified from '../../Popups/Verified'
import Tweet from '../../Popups/Tweet'
const SideBar = () => {
  return (
    <section className='sidebar-wrapper'>
      <div className='sidebar-container'>
        <img src={icon} alt='icon' />
        <Link to='/home'>
          <a className='sidebar-link'>
            <i className='fas fa-home' />
            <p>Home</p>
          </a>
        </Link>
        <Link to='/explore'>
          <a className='sidebar-link'>
            <i className='fas fa-hashtag' />
            <p>Explore</p>
          </a>
        </Link>
        <Link to='/notifications'>
          <a className='sidebar-link'>
            <i className='fa-regular fa-bell' />
            <p>Notifications</p>
          </a>
        </Link>
        <Link to='/messages'>
          <a className='sidebar-link'>
            <i className='far fa-envelope' />
            <p>Messages</p>
          </a>
        </Link>
        <Link to='/lists'>
          <a className='sidebar-link'>
            <i className='far fa-file-alt' />
            <p>Lists</p>
          </a>
        </Link>
        <Link to='./bookmarks'>
          <a className='sidebar-link'>
            <i className='far fa-bookmark' />
            <p>Bookmarks</p>
          </a>
        </Link>
        <a className='sidebar-link'>
          <i className='fab fa-twitter-square' />
          <p>Verified</p>
        </a>
        <Link to='/profile'>
          <a className='sidebar-link'>
            <i className='fa-solid fa-user' />
            <p>Profile</p>
          </a>
        </Link>
        <a className='sidebar-link'>
          <i className='fa fa-ellipsis-h' />
          <p>More</p>
        </a>
        <a className='sb-tweet-btn'>
          <i className='fa-solid fa-feather' />
          <p>Tweet</p>
        </a>
        {/* <div className="more-container">
          <div className="more-content">
          <span>Connect</span>
          <span>Draft</span>
          </div>
        </div> */}
        {/* <Tweet/>
        <Verified/> */}
        <div className='sidebar-profile'>
          {/* <div className="log-out-popup">
            <h3>Log out @Niola_brown</h3>
          </div> */}
          <div className='sbp-details'>
            <img src={niolabrown} className='profile-img' alt='profile-img' />
            <div className='sbp-handle'>
              <h3>Niola</h3>
              <p>@Niola_brown</p>
            </div>
          </div>
          <i className='fa fa-ellipsis-h' />
        </div>
      </div>
    </section>
  )
}

export default SideBar
