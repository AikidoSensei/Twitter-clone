import React from 'react'
import axios from 'axios'
import './Popups.css'
import CancelBtn from '../smallcomponents/CancelBtn'
import '../smallcomponents/SmallComponents.css'
import niolabrown from '../../assets/niolabrown.jpg'
import { useState } from 'react'
import axiosDispatch from '../../axios/globals'
import { useSelector, useDispatch } from 'react-redux'
import { handleTweet } from '../../features/PopupSlice'
import { usePostTweetMutation } from '../../features/ApiSlice'
const Tweet = () => {
  const [tweet, setTweet] = useState('')
  const dispatch = useDispatch()
  const [postTweet] = usePostTweetMutation()

  const handlePost = async ()=>{
    if(tweet.length < 1){
      dispatch(handleTweet())
      return;
    }
    postTweet(tweet)
    setTweet('')
    dispatch(handleTweet())
  }
  return (
    <div className='tweet-wrapper' onClick={(e)=>e.stopPropagation()}>
      <div className='cancel'>
        <CancelBtn />
      </div>
      <div className='tweet-wrapper-x'>
        <div className='tweet-container'>
          <div className='avatar-text'>
            <img src={niolabrown} alt='avatar' className='avatar' />
            <div className='textarea-container'>
              <a>
                Everyone <i className='fa-solid fa-chevron-down' />
              </a>
              <textarea value = {tweet} 
              onChange={(e)=>setTweet(e.target.value)}
              type='text-area' placeholder='What is happening?!' />
            </div>
          </div>
          <div className='privacy-tweet'>
            <div className='tweet-privacy'>
              <i className='fa-solid fa-earth-africa'/>
              <span>Everyone can reply</span>
            </div>
            <div className='tweet-icons-button'>
              <div>
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
                <a className='icon-bg'>
                  <i className='fa fa-calendar' />
                </a>
                <a className='icon-bg'>
                  <i className='fa fa-map-marker-alt' />
                </a>
              </div>
              <button className='quick-tweet-btn'
              onClick={handlePost}
              >Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet