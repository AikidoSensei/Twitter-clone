import React from 'react'
import twitterX from '../../assets/icon.png'
import './Explore.css'

import niolabrown from '../../assets/niolabrown.jpg'
import Loading from '../smallcomponents/Loading'
import MobileNavBar from '../smallcomponents/MobileNavBar'
import { useDispatch } from 'react-redux'
import { handleMobile } from '../../features/PopupSlice'
import { useGetAllTweetQuery } from '../../features/ApiSlice'
import RealPost from '../Center/RealPost'

const Explore = () => {
  const { isLoading, isError, data: realTweets } = useGetAllTweetQuery()
  const dispatch = useDispatch()
  if (isLoading) {
    return (
      <div className='home-center-wrapper'>
        <Loading />
      </div>
    )
  }
  return (
    <div className='home-center-wrapper'>
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
          <input type='text' placeholder='Search Twitter' />
        </div>
      </div>
      <div className='center-trends main-trends'>
        <h2>Trends for you</h2>
        <img src={twitterX} alt="twitter" className='twitter-x' />
        <h4>we have no trends now check back later </h4>

      </div>
      <div className='tweet-container'>
        {realTweets.toReversed().map((item) => {
          return <RealPost key={item._id} data={item} />
        })}
      </div>
      <div className='mobile-nav-fixed'>
        <MobileNavBar />
      </div>
    </div>
  )
}

export default Explore
