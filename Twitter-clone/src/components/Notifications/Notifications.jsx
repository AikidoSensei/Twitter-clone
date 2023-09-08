import React, { useState } from 'react'
import defaultAvatar from '../../assets/default.webp'
import './Notifications.css'
import '../smallcomponents/SmallComponents.css'
import { useDispatch } from 'react-redux'
import { handleMobile } from '../../features/PopupSlice'
const Notifications = () => {
  const dispatch = useDispatch()
  const [forYou, setForYou] = useState(true)
  const [focus, setFocus] = useState(0)
  return (
    <div className='home-center-wrapper'>
      <div className='blur-container'>
        <div className='top-blur'>
          <h2>Notifications</h2>
          <img
            src={defaultAvatar}
            className='mobile-avatar'
            alt='mobile-avatar'
            onClick={(e) => {
              e.stopPropagation()
              dispatch(handleMobile())
            }}
          />
        </div>
        <div className='for-you'>
          <a
            style={{
              color: `${
                focus === 0
                  ? 'var(--twitter-black)'
                  : 'var(--twitter-dark-gray)'
              }`,
            }}
            onClick={() => {
              setFocus(0)
            }}
          >
            All {focus === 0 ? <span className='blue-line'></span> : <span />}
          </a>
          <a
            style={{
              color: `${
                focus === 1
                  ? 'var(--twitter-black)'
                  : 'var(--twitter-dark-gray)'
              }`,
            }}
            onClick={() => {
              setFocus(1)
            }}
          >
            Verified
            {focus === 1 ? <span className='blue-line'></span> : <span />}
          </a>
          <a
            style={{
              color: `${
                focus === 2
                  ? 'var(--twitter-black)'
                  : 'var(--twitter-dark-gray)'
              }`,
            }}
            onClick={() => {
              setFocus(2)
            }}
          >
            Mentions{' '}
            {focus === 2 ? <span className='blue-line'></span> : <span />}
          </a>
        </div>
      </div>
      <div className='notifications-wrapper'>
        <div className='notifications-container'>
          <h2>You have no notifications</h2>
          <p>When you do they will show up here</p>
        </div>
      </div>
    </div>
  )
}

export default Notifications
