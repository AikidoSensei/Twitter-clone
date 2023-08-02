import React, {useEffect} from 'react'
import defaultImage from '../../assets/default.webp'
import './SingleTweet.css'
import BackBtn from '../smallcomponents/BackBtn'
import Post from '../Center/Post'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { singleTweet } from '../../features/RealUserSlice'
import Loading from '../smallcomponents/Loading'
import QuickReply from '../smallcomponents/QuickReply'
import { useGetTweetQuery } from '../../features/ApiSlice'
const SingleTweet = () => {
  const {mockTweet} = useSelector((store)=>store.mockUsers)
  const dispatch = useDispatch();
    // const { name, username, avatar, profile_image, tweet, comments, image, likes, retweets, views } = mockTweet
  const params = useParams();

  
  useEffect(()=>{
    dispatch(singleTweet(params.id))
  },[])

  const {data: tweet,
    isLoading,
    isError,
    error, 
  } = useGetTweetQuery(params.id)
  
  return (
    <div className='home-center-wrapper'>{
    isLoading ? <Loading/> :
    <>
        <div className='single-tweet-container'>
          <div className='profile-blur'>
            <BackBtn />
            <div className='profile-blur-detail'>
              <h3>Tweet</h3>
            </div>
          </div>
          <section className='main-post'>
            <div className='post__content__tweet'>
              <div className='tweet__title'>
                <div className='tweet-title-img'>
                  <img
                    src={defaultImage}
                    className='post__avatar'
                    alt='profile-img'
                  />
                  <div className='sbp__handle'>
                    <h3>{tweet?.name}</h3>
                    <p>@{tweet?.username}</p>
                  </div>
                </div>
                <a className='icon-bg'>
                  <i className='fa fa-ellipsis-h post-ellipsis' />
                </a>
              </div>
              <div className='tweet__body__container'>
                <div className='tweet__body'>
                  <div className='post__text__content'>{tweet?.tweetText}</div>
                  {
                    <div className='single-media media__container'>
                      {tweet?.image && (
                        <img src={tweet?.image} alt='post-image' />
                      )}
                    </div>
                  }
                </div>
              </div>
            </div>
          </section>
          <div className='tweet-activity-container'>
            <div className='tweet-activity'>
              <p>
                {tweet?.retweets?.length} <span>Retweets</span>
              </p>
              <p>
                {tweet?.comments?.length} <span>Quotes</span>
              </p>
              <p>
                {tweet?.likes?.length} <span>Likes</span>
              </p>
              <p>
                10 <span>Bookmarks</span>
              </p>
            </div>
          </div>
          <div className='tweet-interact-container'>
            <div className='tweet-interact'>
              <a className='comment-btn interact'>
                <i className='fa-regular fa-comment icon-bg comment-i' />
              </a>
              <a className='retweet-btn interact'>
                <i className='fa-solid fa-retweet icon-bg retweet-i ' />
              </a>
              <a className='heart-btn interact'>
                <i className='fa-regular fa-heart icon-bg heart-i ' />
              </a>
              <a className='heart-btn interact'>
                <i className='fa-regular fa-bookmark icon-bg comment-i' />
              </a>
              <a className='share-btn interact'>
                <i className='fa-solid fa-arrow-up-from-bracket icon-bg share-i' />
              </a>
            </div>
          </div>
          <QuickReply />
          <div className='tweet-container'>{/* <Post/> */}</div>
        </div>
      </>}
    </div>
  )
}

export default SingleTweet
