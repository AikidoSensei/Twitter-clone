import React from 'react'
import './SideBar.css'
import { NavLink } from 'react-router-dom'
import icon from '../../assets/icon.png'
import niolabrown from '../../assets/niolabrown.jpg'
import Verified from '../Popups/Verified'
import Tweet from '../Popups/Tweet'
import { useSelector, useDispatch } from 'react-redux'
import {
  handleTweet,
  handleShowLogout,
  handleVerified,
  handleMore,
  clearAll,
} from '../../features/PopupSlice'
import MobileNavBar from '../smallcomponents/MobileNavBar'
const SideBar = () => {
  const { tweet, showLogout, more, verified } = useSelector(
    (store) => store.popup
  )
  const dispatch = useDispatch()
  window.addEventListener('click',()=>{
    dispatch(clearAll())
  })
  return (
    <section className='sidebar-wrapper'>
      {tweet && <div className='dark-shade'></div>}
      {verified && <div className='dark-shade'></div>}
      <div className='sidebar-container'>
        <img src={icon} alt='icon' />
        <NavLink
          className={({ isActive }) =>
            isActive ? 'link-active sidebar-link ' : 'sidebar-link'
          }
          to='/home'
        >
          <i className='fas fa-home' />
          <p>Home</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'link-active sidebar-link ' : 'sidebar-link'
          }
          to='/explore'
        >
          <i className='fas fa-hashtag' />
          <p>Explore</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'link-active sidebar-link ' : 'sidebar-link'
          }
          to='/notifications'
        >
          <i className='fa-regular fa-bell' />
          <p>Notifications</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'link-active sidebar-link ' : 'sidebar-link'
          }
          to='/messages'
        >
          <i className='far fa-envelope' />
          <p>Messages</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'link-active sidebar-link ' : 'sidebar-link'
          }
          to='/lists'
        >
          <i className='far fa-file-alt' />
          <p>Lists</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'link-active sidebar-link ' : 'sidebar-link'
          }
          to='./bookmarks'
        >
          <i className='far fa-bookmark' />
          <p>Bookmarks</p>
        </NavLink>
        <a
          className='sidebar-link'
          onClick={(e) => {
            e.stopPropagation()
            dispatch(handleVerified())
          }}
        >
          <i className='fab fa-twitter-square' />
          <p>Verified</p>
        </a>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'link-active sidebar-link ' : 'sidebar-link'
          }
          to='/profile'
        >
          <i className='fa-solid fa-user' />
          <p>Profile</p>
        </NavLink>
        <a
          className='sidebar-link'
          onClick={(e) => {
            e.stopPropagation()
            dispatch(handleMore())
          }}
        >
          <i className='fa fa-ellipsis-h' />
          <p>More</p>
        </a>
        <a
          className='sb-tweet-btn'
          onClick={(e) => {
            e.stopPropagation()
            dispatch(handleTweet())
          }}
        >
          <i className='fa-solid fa-feather' />
          <p>Tweet</p>
        </a>
        {more && (
          <div className='more-container' onClick={(e) => e.stopPropagation()}>
            <div className='more-content'>
              <span>
                <i className='fa-solid fa-at' />
                Connect
              </span>
              <span>
                {' '}
                <i class='fa-regular fa-pen-to-square'/>Draft
              </span>
            </div>
          </div>
        )}

        <div className='sidebar-profile'>
          {showLogout && (
            <div className='log-out-popup' onClick={(e) => e.stopPropagation()}>
              <h3>Log out @Niola_brown</h3>
            </div>
          )}
          <div
            className='sbp-details'
            onClick={(e) => {
              e.stopPropagation()
              dispatch(handleShowLogout())
            }}
          >
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
