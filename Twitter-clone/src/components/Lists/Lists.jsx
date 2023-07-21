import React from 'react'
import niolabrown from '../../assets/niolabrown.jpg'
import './Lists.css'
import ProfileBlur from '../smallcomponents/ProfileBlur'
import MobileNavBar from '../smallcomponents/MobileNavBar'
const Lists = () => {
  return (
    <div className='home-center-wrapper'>
      <ProfileBlur />
      <div className='lists-wrapper'>
        <div className='lists-content'>
          <h2>Pinned Lists</h2>
          <p>
            Nothing to see here yet — pin your favorite Lists to access them
            quickly.
          </p>
        </div>
        <div className='lists-content'>
          <h2>Your Lists</h2>
          <p>
            You haven't created or followed any Lists. When you do, they'll show
            up here.
          </p>
        </div>
      </div>
      <div className='mobile-nav-fixed'>
        <MobileNavBar />
      </div>
    </div>
  )
}

export default Lists