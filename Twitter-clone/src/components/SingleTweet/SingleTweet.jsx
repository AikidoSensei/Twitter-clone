import React, {useEffect, useState} from 'react'
import defaultImage from '../../assets/default.webp'
import './SingleTweet.css'
import BackBtn from '../smallcomponents/BackBtn'
import Post from '../Center/Post'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Loading from '../smallcomponents/Loading'
import QuickReply from '../smallcomponents/QuickReply'
import Reply from '../smallcomponents/Reply'
import { useGetAllRepliesQuery, useGetTweetQuery } from '../../features/ApiSlice'
import { useLikePostMutation, useUnlikePostMutation } from '../../features/ApiSlice'
import { useRetweetPostMutation, useUnretweetPostMutation } from '../../features/ApiSlice'
const SingleTweet = () => {
    const {
      user: { userId },
    } = useSelector((state) => state.loginUser)
  const [like, setLike] = useState(false)
  const [retweet, setRetweet] = useState(false)
  const {mockTweet} = useSelector((store)=>store.mockUsers)
  const dispatch = useDispatch();
   
  
  const params = useParams();


  const {data: tweet,
    isLoading,
    isError,
    error, 
  } = useGetTweetQuery(params.id)
  const {data: replies} = useGetAllRepliesQuery(params.id)
  const [likePost] = useLikePostMutation()
  const [unlikePost] = useUnlikePostMutation()
  const [retweetPost] = useRetweetPostMutation()
  const [unretweetPost] = useUnretweetPostMutation() 

  const handleLike = () => {
    if (!tweet.likes.includes(userId)) {
      likePost(tweet._id)
      setLike(true)
    }
  }
  const handleUnLike = () => {
    console.log('try unlike')
    if (tweet.likes.includes(userId)) {
      unlikePost(tweet._id)
      setLike(false)
    }
  }
   const handleRetweet = () => {
     if (!tweet.retweets.includes(userId)) {
       retweetPost(tweet._id)
       setRetweet(true)
     }
   }
   const handleUnretweet = () => {
     console.log('try unretweet')
     if (tweet.retweets.includes(userId)) {
       unretweetPost(tweet._id)
       setRetweet(false)
     }
   }
  return (
    <div className='home-center-wrapper'>
      {isLoading ? (
        <Loading />
      ) : (
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
                      <h3>
                        {tweet?.name}{' '}
                        <i className='fa-solid fa-circle-check verified' />
                      </h3>
                      <p>@{tweet?.username}</p>
                    </div>
                  </div>
                  <a className='icon-bg'>
                    <i className='fa fa-ellipsis-h post-ellipsis' />
                  </a>
                </div>
                <div className='tweet__body__container'>
                  <div className='tweet__body'>
                    <div className='post__text__content'>
                      {tweet?.tweetText}
                    </div>
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
                  0 <span>Bookmarks</span>
                </p>
              </div>
            </div>
            <div className='tweet-interact-container'>
              <div className='tweet-interact'>
                <a className='comment-btn interact'>
                  <i className='fa-regular fa-comment icon-bg comment-i' />
                </a>
                <a
                  className='retweet-btn interact'
                  style={{
                    color: retweet ? '#1eaf1e' : 'var(--twitter-primaryfont)',
                  }}
                >
                  {tweet.retweets.includes(userId) || retweet ? (
                    <i
                      style={{ color: '#1eaf1e' }}
                      className='fa-solid fa-retweet icon-bg retweet-i'
                      onClick={handleUnretweet}
                    />
                  ) : (
                    <i
                      className='fa-solid fa-retweet icon-bg retweet-i'
                      onClick={handleRetweet}
                    />
                  )}
                </a>

                <a
                  className='heart-btn interact'
                  style={{
                    color: like ? '#e13535' : 'var(--twitter-primaryfont)',
                  }}
                >
                  {tweet.likes.includes(userId) || like ? (
                    <i
                      style={{ color: '#e13535' }}
                      className=' fa-solid fa-heart icon-bg heart-i bounce'
                      onClick={handleUnLike}
                    />
                  ) : (
                    <i
                      className='fa-regular fa-heart icon-bg heart-i bounce-reg'
                      onClick={handleLike}
                    />
                  )}
                </a>
                <a className='share-btn interact'>
                  <i className='fa-solid fa-arrow-up-from-bracket icon-bg share-i' />
                </a>
              </div>
            </div>
            <QuickReply id={tweet._id} />
            <div className='tweet-container'>
              {replies?.toReversed().map((item) => {
                return <Reply key={item._id} data={item} />
              })}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default SingleTweet
