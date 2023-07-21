import React, { useState } from 'react'
import './MobileSideBar.css'
import CancelBtn from '../smallcomponents/CancelBtn'
import niolabrown from '../../assets/niolabrown.jpg'
import {useSelector, useDispatch} from 'react-redux'
import { handleMobile } from '../../features/PopupSlice'
import { NavLink } from 'react-router-dom'
const MobileSideBar = () => {
const {mobileSideBar} = useSelector(store=>store.popup)
const dispatch = useDispatch();

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
        <img src={niolabrown} className='post__avatar' alt='profile-img' />
        <div className='msb-body profile-body'>
          <div className='msb-handle twitter-handle'>
            <h3>Niola Brown</h3>
            <p>@Niola_brown</p>
          </div>
          <div className='msb-followers profile-followers'>
            <span>
              1000<span>Following</span>
            </span>
            <span>
              5586<span>Followers</span>
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
          <NavLink to='/'>
            <span onClick={() => dispatch(handleMobile())}>
              <i className='fas fa-home' />
              Home
            </span>
          </NavLink>
          <a>
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
        <div className='msb-logout'>
          <p>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default MobileSideBar
