import React, {useEffect, useState} from 'react'
import BackBtn from '../smallcomponents/BackBtn'
import '../MyProfile/MyProfile.css'
import banner from '../../assets/tasty-hero-wallpaper.jpg'
import niolabrown from '../../assets/niolabrown.jpg'
import defaultImage from '../../assets/default.webp'
import UserPost from './UserPost'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { mockUserData } from '../../features/MockUserSlice'
import Loading from '../smallcomponents/Loading'
import { useGetUserQuery } from '../../features/ApiSlice'
import RealPost from '../Center/RealPost'
import { useGetUserTweetsQuery } from '../../features/ApiSlice'
import { useFollowMutation, useUnfollowMutation } from '../../features/ApiSlice'
const UserProfile = () => {
  const [unfollow, setUnfollow] = useState()
  const {user: { userId }} = useSelector((state) => state.loginUser)
  const dispatch = useDispatch();
  const params = useParams()


  const  {data: user,
    isLoading,
    isError,
    error, 
  } = useGetUserQuery(params.id)

  const {data:userTweets} = useGetUserTweetsQuery(params.id)
  
  const [followUser] = useFollowMutation();
  const [unfollowUser] = useUnfollowMutation();

  const handleFollow = ()=>{
    followUser(params.id)
  }

  const handleUnfollow = ()=>{
    unfollowUser(params.id)
    setUnfollow(false)
  }
  console.log(user)
  return (
    <div className='home-center-wrapper' onClick={() => setUnfollow(false)}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className='profile-blur'>
            <BackBtn />
            <div className='profile-blur-detail'>
              <h3>
                {user?.name} <i className='fa-solid fa-circle-check verified' />
              </h3>
              <p> {user?.tweets?.length} Tweets</p>
            </div>
          </div>
          <div className='profile-media'>
            <img src={banner} className='banner' alt='banner' />
            <img
              src={defaultImage}
              className='profile-avatar'
              alt='profile-avatar'
            />
            {user.followers.includes(userId) ? (
              <a
                className='unfollow'
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setUnfollow(!unfollow)
                }}
              >
                Following
              </a>
            ) : (
              <a className='follow ' onClick={handleFollow}>
                Follow
              </a>
            )}
          </div>
          {/* UNFOLLOW MODAL */}
          {unfollow && (
            <div className='unfollow-modal'>
              <span onClick={handleUnfollow}>
                Unfollow @ {user?.username}
                <i className='fa-solid fa-user-xmark ' />
              </span>
            </div>
          )}
          <div className='profile-body'>
            <div className='twitter-handle'>
              <h3>{user?.name}</h3>
              <p>@{user?.username}</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              excepturi.
            </p>
            <div className='location-joined'>
              <span>
                <i className='fa-solid fa-location-dot'></i>
                {user.location ? user.location : 'Location'}
              </span>
              <span>
                <i className='fa-solid fa-calendar-days' />
                Joined {user?.joined}
              </span>
            </div>
            <div className='profile-followers'>
              <span>
                {user?.following?.length}
                <span>Following</span>
              </span>
              <span>
                {user?.followers?.length}
                <span>Followers</span>
              </span>
            </div>
            <div className='profile-base'>
              <h3>Tweets</h3>
            </div>
          </div>
          <div className='tweet-container'>
            {userTweets?.toReversed().map((item) => {
              return <RealPost data={item} />
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default UserProfile
