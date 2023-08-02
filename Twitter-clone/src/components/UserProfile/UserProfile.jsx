import React, {useEffect} from 'react'
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

const UserProfile = () => {
  const dispatch = useDispatch();
  const params = useParams()

  // useEffect(()=>{
  //   dispatch(mockUserData(id))
  // },[])

  const  {data: user,
    isLoading,
    isError,
    error, 
  } = useGetUserQuery(params.id)

  // const { mockUser } = useSelector((store) => store.mockUsers)

  // const {name, username,bio, date_joined, followers_count, following_count, location, profile_image, tweets} = mockUser
  // const user = {name, username, profile_image}
  return (
    <div className='home-center-wrapper'>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className='profile-blur'>
            <BackBtn />
            <div className='profile-blur-detail'>
              <h3>{user?.name}</h3>
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
            <a className=' follow '>follow</a>
          </div>
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
          <div className='tweet-container'></div>
        </>
      )}
    </div>
  )
}

export default UserProfile
