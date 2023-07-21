import React from 'react'
import { useDispatch } from 'react-redux'
import { handleTweet } from '../../features/PopupSlice'
import { NavLink } from 'react-router-dom'
const MobileNavBar = () => {
  const dispatch = useDispatch()
  return (
    <div className='mobile-nav-container'>
      <div
        className='mnb-tweet'
        onClick={(e) => {
          e.stopPropagation()
          dispatch(handleTweet())
        }}
      >
        <i className='fa-solid fa-feather-pointed' />
      </div>
      <div className='mobile-nav-content'>
        <NavLink to='/' className='mob-icon'>
          <i className='fas fa-home' />
        </NavLink>
        <NavLink to='/explore' className='mob-icon'>
          <i className='fa-solid fa-magnifying-glass' />
        </NavLink>
        <NavLink to='/notifications' className='mob-icon'>
          <i className='fa-regular fa-bell' />
        </NavLink>
        <NavLink to='/messages' className='mob-icon'>
          <i className='far fa-envelope' />
        </NavLink>
      </div>
    </div>
  )
}

export default MobileNavBar