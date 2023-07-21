import React, {useState} from 'react'
import niolabrown from '../../assets/niolabrown.jpg'
import icon from '../../assets/icon.png'
import './Messages.css'
import SearchBar from '../smallcomponents/SearchBar'
import ProfileBlur from '../smallcomponents/ProfileBlur'
import BackBtn from '../smallcomponents/BackBtn'
const Messages = () => {
 const [forYou, setForYou] = useState(true)
  return (
    <div className='home-center-wrapper'>
      <div className='blur-container'>
        <div className='blur-message'>
          <h2>Messages</h2>
          <i className='fa-regular fa-envelope fa-xl'/>
        </div>
      </div>
      <div className='messages-wrapper'>
        <div className='top-messages'>
          <BackBtn />
          <div className='search-bar-messages '>
            <i className='fa-solid fa-magnifying-glass' />
            <input type='text' placeholder='Search Twitter' />
          </div>
        </div>
      </div>
      <div className='messages-container'></div>
    </div>
  )
}

export default Messages
