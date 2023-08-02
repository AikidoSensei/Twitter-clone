import React, { useEffect } from 'react'
import BackBtn from '../smallcomponents/BackBtn'
import './MyProfile.css'
import banner from '../../assets/tasty-hero-wallpaper.jpg'
import niolabrown from '../../assets/niolabrown.jpg'
import Post from '../Center/Post'
import Loading from '../smallcomponents/Loading'
import RealPost from '../Center/RealPost'
import { useGetMyProfileQuery, useGetMyTweetsQuery } from '../../features/ApiSlice'
const MyProfile = () => {
  const {data:tweet, isLoading, error} = useGetMyProfileQuery()
  const {data:myOwnTweets} = useGetMyTweetsQuery()

  return (
    <div className='home-center-wrapper'>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className='profile-blur'>
            <BackBtn />
            <div className='profile-blur-detail'>
              <h3>{tweet?.name}</h3>
              <p>{tweet?.tweets?.length} Tweets</p>
            </div>
          </div>
          <div className='profile-media'>
            <img src={banner} className='banner' alt='banner' />
            <img
              src={niolabrown}
              className='profile-avatar'
              alt='profile-avatar'
            />
            <a className='edit-profile'>Edit profile</a>
          </div>
          <div className='profile-body'>
            <div className='twitter-handle'>
              <h3>{tweet?.name}</h3>
              <p>@{tweet?.username}</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              excepturi.
            </p>
            <div className='location-joined'>
              <span>
                <i className='fa-solid fa-location-dot'></i>Location
              </span>
              <span>
                <i className='fa-solid fa-calendar-days' />
                Joined {tweet?.joined}
              </span>
            </div>
            <div className='profile-followers'>
              <span>
                {tweet?.following?.length}
                <span>Following</span>
              </span>
              <span>
                {tweet?.followers?.length}
                <span>Followers</span>
              </span>
            </div>
            <div className='profile-base'>
              <h3>Tweets</h3>
            </div>
          </div>
          <div className='tweet-container'>
            {myOwnTweets?.toReversed().map((item) => {
              return <RealPost data={item} />
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default MyProfile
