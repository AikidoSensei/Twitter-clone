import React, { useState } from 'react'
import './SmallComponents.css'
import niolabrown from '../../assets/niolabrown.jpg'
import axiosDispatch from '../../axios/globals'
import { useSelector, useDispatch } from 'react-redux'
import { usePostReplyMutation } from '../../features/ApiSlice'
const QuickReply = ({id}) => {

  const [reply, setReply] = useState('')
  const dispatch = useDispatch()
  const [postReply] = usePostReplyMutation()

  const handleReply = ()=>{
    postReply({id, reply})
    setReply('')
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
          <button className='quick-tweet-btn' onClick={handleReply}>
            Reply
          </button>
        </div>
      </div>
    </main>
  )
}

export default QuickReply
