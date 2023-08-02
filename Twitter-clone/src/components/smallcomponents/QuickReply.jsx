import React, { useState } from 'react'
import './SmallComponents.css'
import niolabrown from '../../assets/niolabrown.jpg'
import axiosDispatch from '../../axios/globals'
import { useSelector, useDispatch } from 'react-redux'

const QuickReply = () => {
  const [reply, setReply] = useState('')
  const dispatch = useDispatch()

  const handlePost = async () => {
    try {
      console.log('tweeted')
      const response = await axiosDispatch.post('/post', { tweetText: tweet })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <main className='quick-tweet-wrapper'>
      <div className='tweet-container'>
        <div className='avatar-text'>
          <img src={niolabrown} alt='avatar' className='avatar' />
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            type='text-area'
            placeholder='Post your reply!'
          />
        </div>
        <div className='tweet-icons-button'>
          <section>
            <a className='icon-bg'>
              <i className='fa fa-image' />
            </a>
            <a className='icon-bg'>
              <i className='fa-solid fa-camera' />
            </a>
            <a className='icon-bg'>
              <i className='fa fa-list' />
            </a>
            <a className='icon-bg'>
              <i className='fa fa-smile' />
            </a>
            
      
          </section>
          <button className='quick-tweet-btn' onClick={handlePost}>
            Reply
          </button>
        </div>
      </div>
    </main>
  )
}

export default QuickReply
