import React from 'react'
import ProfileBlur from '../smallcomponents/ProfileBlur'
import MobileNavBar from '../smallcomponents/MobileNavBar'
const BookMarks = () => {
  return (
    <div className='home-center-wrapper'>
      <ProfileBlur />
      <div  className='notifications-wrapper'>
        <div className='notifications-container'>
          <h2 style={{ fontSize: '12pt' }}>You have no bookmarks listed</h2>
        </div>
      </div>
      <div className='mobile-nav-fixed'>
        <MobileNavBar />
      </div>
    </div>
  )
}

export default BookMarks