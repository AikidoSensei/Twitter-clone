import React from 'react'
import niolabrown from '../../assets/niolabrown.jpg'
import { useDispatch } from 'react-redux'
import { handleMobile } from '../../features/PopupSlice'
const ProfileBlur = () => {
  const dispatch = useDispatch()
  return (
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
        <input type='text' placeholder='Search Lists' />
      </div>
    </div>
  )
}

export default ProfileBlur
