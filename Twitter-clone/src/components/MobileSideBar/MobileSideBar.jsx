import React from 'react'
import './MobileSideBar.css'
import CancelBtn from '../smallcomponents/CancelBtn'
import defaultAvatar from '../../assets/default.webp'
import {useSelector, useDispatch} from 'react-redux'
import { handleMobile } from '../../features/PopupSlice'
import { NavLink } from 'react-router-dom'
import { logout } from '../../features/LoginSlice'
import {handleVerified} from '../../features/PopupSlice'
import { useGetMyProfileQuery } from '../../features/ApiSlice'
const MobileSideBar = () => {
   const { data: user, isLoading, error } = useGetMyProfileQuery()
const {mobileSideBar} = useSelector(store=>store.popup)


const dispatch = useDispatch();

 const handleLogout = (e) => {
    
   e.stopPropagation()
   dispatch(logout())
   dispatch(handleMobile())
 }
  return (
    <div
      className={
        mobileSideBar === true ? 'm-showsidebar m-sidebar' : 'm-sidebar'
      }
    >
      <div className='m-sidebar-container' onClick={(e) => e.stopPropagation()}>
        <div className='msb-top'>
          <h2>Account Info</h2>
          <CancelBtn />
        </div>
        <img src={defaultAvatar} className='post__avatar' alt='profile-img' />
        <div className='msb-body profile-body'>
          <div className='msb-handle twitter-handle'>
            <h3>
              {user?.name}
              <i className='fa-solid fa-circle-check verified' />
            </h3>
            <p>@{user?.username}</p>
          </div>
          <div className='msb-followers profile-followers'>
            <span>
              {user?.following?.length}
              <span>Following</span>
            </span>
            <span>
              {user?.followers?.length}
              <span>Followers</span>
            </span>
          </div>
        </div>
        <div className='msb-content'>
          <NavLink to='/profile'>
            <span onClick={() => dispatch(handleMobile())}>
              <i className='fa-solid fa-user' />
              Profile
            </span>
          </NavLink>
          <NavLink to='/home'>
            <span onClick={() => dispatch(handleMobile())}>
              <i className='fas fa-home' />
              Home
            </span>
          </NavLink>
          <a onClick={() => dispatch(handleVerified())}>
            <span>
              <i className='fab fa-twitter-square twitter-blue' />
              Verified
            </span>
          </a>
          <NavLink to='/lists'>
            <span onClick={() => dispatch(handleMobile())}>
              <i className='far fa-file-alt' />
              Lists
            </span>
          </NavLink>
          <NavLink to='/bookmarks'>
            <span onClick={() => dispatch(handleMobile())}>
              <i className='far fa-bookmark' />
              Bookmarks
            </span>
          </NavLink>
        </div>
        <div className='msb-logout' onClick={handleLogout}>
          <p>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default MobileSideBar
