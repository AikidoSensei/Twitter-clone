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
const HomeCenter = () => {
 const { mobileSideBar } = useSelector((store) => store.popup)
 const {mockTweets} = useSelector((store)=>store.mockUsers)

//  const {realTweets} = useSelector((store)=>store.realUsers)
  
 const {isLoading, isError, data:realTweets} = useGetAllTweetQuery()

console.log(realTweets)

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
  return (
    <main className='home-center-wrapper'>
      <MobileSideBar />
      <div className='home-center-container'>
        <Blur />
        <div className='tweets-container'>
          <QuickTweet />
          <div className="realUsers">
            {realTweets.map((item)=>{
              return <RealPost data={item}/>
            })}
          </div>
          <div className="mockUsers">
            {mockTweets.map((item)=>{
              return <Post data={item}/>
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomeCenter
