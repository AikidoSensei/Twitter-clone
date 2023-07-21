import React from 'react'
import './Popups.css'
import icon from '../../assets/icon.png'
import CancelBtn from '../smallcomponents/CancelBtn'
const Verified = () => {
  return (
    <div className='verified-wrapper' onClick={(e) => e.stopPropagation()}>
      <div className='cancel'>
        <CancelBtn />
      </div>
      <div className='verified-container'>
        <div className='verified-content'>
          <img src={icon} alt='icon' />
          <h2>Who are you? </h2>
          <p>Choose the right Verified subscription for you:</p>
          <div className='verified-options'>
            <div className='verify-option'>
              <div className='option-content'>
                <p>Twitter Blue</p>
                <h3>I am an individual</h3>
                <p>For individuals and creator </p>
              </div>
            </div>
            <div className='verify-option'>
              <div className='option-content'>
                <p>Verified Organizations</p>
                <h3>I am an organizations</h3>
                <p>For businesses, government agencies, and non-profits </p>
              </div>
            </div>
          </div>
          <button className='subscribe'>Subscribe</button>
          <p>
            Learn more about <span> Twitter Blue</span> and
            <span> Verified Organizations</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Verified