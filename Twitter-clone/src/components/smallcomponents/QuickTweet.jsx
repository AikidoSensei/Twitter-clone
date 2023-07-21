import React from 'react'
import './SmallComponents.css'
import niolabrown from '../../assets/niolabrown.jpg'
const QuickTweet = ()=> {
  return (
    <main className='quick-tweet-wrapper'>
      <div className='tweet-container'>
        <div className='avatar-text'>
          <img src={niolabrown} alt='avatar' className='avatar' />
          <textarea type='text-area' placeholder='What is happening?!' />
        </div>
        <div className='tweet-icons-button'>
          <section>
            <a className='icon-bg'>
              <i className='fa fa-image' />
            </a>
            <a className='icon-bg'>
              <i className='fa-solid fa-camera'/>
            </a>
            <a className='icon-bg'>
              <i className='fa fa-list' />
            </a>
            <a className='icon-bg'>
              <i className='fa fa-smile' />
            </a>
            <a className='icon-bg'>
              <i className='fa fa-calendar' />
            </a>
            <a className='icon-bg'>
              <i className='fa fa-map-marker-alt' />
            </a>
          </section>
          <button className='quick-tweet-btn'>Tweet</button>
        </div>
      </div>
    </main>
  )
}

export default QuickTweet
