import React, { useEffect } from 'react'
import Blur from '../smallcomponents/Blur'
import './HomeCenter.css'
import QuickTweet from '../smallcomponents/QuickTweet'
import Post from './Post'
import MobileNavBar from '../smallcomponents/MobileNavBar'
import MobileSideBar from '../MobileSideBar/MobileSideBar'
import { useSelector, useDispatch } from 'react-redux'
import { mockData } from '../../features/MockUserSlice'
import RealPost from './RealPost'
import { useGetAllTweetQuery } from '../../features/ApiSlice'
import Loading from '../smallcomponents/Loading'
import ErrorOccured from '../smallcomponents/ErrorOccured'
import { handleError } from '../../features/PopupSlice'
const HomeCenter = () => {
 const { mobileSideBar  } = useSelector((store) => store.popup)
 const {mockTweets} = useSelector((store)=>store.mockUsers)
  
 const {isLoading, isError, data:realTweets, error} = useGetAllTweetQuery()

const dispatch = useDispatch()
useEffect(()=>{
 dispatch(mockData())
},[])

if(isLoading){
  return (
    <div className="home-center-wrapper">
      <Loading/>
    </div>
  )
}
if(isError ||error ){
  dispatch(handleError())
}
  return (
    <main className='home-center-wrapper'>
      <MobileSideBar />
      <div className='home-center-container'>
        <Blur />
        <div className='tweets-container'>
          <QuickTweet />
          <div className="realUsers">
            {realTweets.toReversed().map((item)=>{
              return <RealPost key={item._id} data={item} />
            })}
          </div>
          <div className="mockUsers">
            {mockTweets.map((item)=>{
              return <Post key={item.username}data={item}/>
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomeCenter
