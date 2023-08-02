import React, { useState } from 'react'
import niolabrown from '../../assets/niolabrown.jpg'
import defaultAvatar from '../../assets/default.webp'
import './Post.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTweet } from '../../features/MockUserSlice'
import {
  useLikePostMutation,
  useUnlikePostMutation,
} from '../../features/ApiSlice'

const RealPost = ({ data }) => {
  const {user:{userId}} = useSelector(state=>state.loginUser)

  const [like, setLike] = useState(false)
  const [retweet, setRetweet] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isRetweet, setIsRetweet] = useState(false)
  const [likePost] = useLikePostMutation()
  const [unlikePost] = useUnlikePostMutation()
  
  const handleLike = ()=>{
    if(!data.likes.includes(userId)){
      likePost(data._id)
      setLike(true)
    }
  }

  const handleUnLike = ()=>{
 console.log('try unlike')
    if (data.likes.includes(userId)) {
      unlikePost(data._id)
      setLike(false)
    }
  }
  const dispatch = useDispatch()
  return (
    <article className='post__container'>
      <section className='main-post'>
        <Link className='link-image' to={`/user/${data?.createdBy}`}>
          <img
            src={data.avatar ? avatar : defaultAvatar}
            className='post__avatar'
            alt='profile-img'
          />
        </Link>
        <Link to={`/tweet/${data?.tweetId}`} className='post__content'>
          <div className='post__title'>
            <div className='sbp__handle'>
              <h3>{data?.name} </h3>
              <p>@{data?.username}</p>
            </div>
            <a className='icon-bg'>
              <i className='fa fa-ellipsis-h post-ellipsis' />
            </a>
          </div>
          <div className='post__body'>
            <div className='post__text__content'>{data?.tweetText}</div>
            {
              <div className='media__container'>
                {data?.image && <img src={data?.image} alt='post-image' />}
              </div>
            }
          </div>
        </Link>
      </section>
      <div className='post__interact__wrapper'>
        <div className='post__interact__container'>
          <a className='comment-btn interact'>
            <i className='fa-regular fa-comment icon-bg comment-i' />
            {data?.comments?.length}
          </a>
          <a
            className='retweet-btn interact'
            style={{
              color: retweet ? '#1eaf1e' : 'var(--twitter-primaryfont)',
            }}
            onClick={() => {
              setRetweet(!retweet)
            }}
          >
            <i className='fa-solid fa-retweet icon-bg retweet-i' />
            {data?.retweets?.length}
          </a>
          <a
            className='heart-btn interact'
            style={{
              color: like ? '#e13535' : 'var(--twitter-primaryfont)',
            }}
          >
            {data.likes.includes(userId) || like ? (
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
            {data?.likes?.length}
          </a>

          <a className='share-btn interact'>
            <i className='fa-solid fa-arrow-up-from-bracket icon-bg share-i' />
          </a>
        </div>
      </div>
    </article>
  )
}

export default RealPost
