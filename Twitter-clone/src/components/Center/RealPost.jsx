import React, { useEffect, useState } from 'react'

import defaultAvatar from '../../assets/default.webp'
import './Post.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTweet } from '../../features/MockUserSlice'
import {
  useLikePostMutation,
  useUnlikePostMutation,
} from '../../features/ApiSlice'
import { useRetweetPostMutation, useUnretweetPostMutation } from '../../features/ApiSlice'
import DeleteTweet from '../Popups/DeleteTweet'
import { handleDelete } from '../../features/PopupSlice'
const RealPost = ({ data }) => {
  const {user:{userId}} = useSelector(state=>state.loginUser);

  const [showDelete, setShowDelete] = useState(false);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false)

  const [like, setLike] = useState(false)
  const [retweet, setRetweet] = useState(false)

  const [likePost] = useLikePostMutation()
  const [unlikePost] = useUnlikePostMutation()
  const [retweetPost] = useRetweetPostMutation()
  const [unretweetPost] = useUnretweetPostMutation() 

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
  const handleRetweet = ()=>{
    if(!data.retweets.includes(userId)){
      retweetPost(data._id)
      setRetweet(true)
    }
  }

  const handleUnretweet = ()=>{
 console.log('try unretweet')
    if (data.retweets.includes(userId)) {
      unretweetPost(data._id)
      setRetweet(false)
    }
  }
  const dispatch = useDispatch()
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      setShowDelete(false)
    })
    return window.removeEventListener('scroll', ()=>{
      setShowDelete(false)
    })
  })
  return (
    <article
      className='post__container'
      onClick={() => {
        setShowDelete(false)
      }}
    >
      <section className='main-post'>
        <Link
          className='link-image'
          to={
            data.createdBy === userId ? `/profile` : `/user/${data?.createdBy}`
          }
        >
          <img
            src={data.avatar ? avatar : defaultAvatar}
            className='post__avatar'
            alt='profile-img'
          />
        </Link>
        <Link to={`/tweet/${data?.tweetId}`} className='post__content'>
          <div className='post__title'>
            <div className='sbp__handle'>
              <h3>
                {data?.name} <i className='fa-solid fa-circle-check verified' />
              </h3>
              <p>@{data?.username}</p>
            </div>
            <a
              className='icon-bg'
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                if (data?.createdBy !== userId) {
                  return
                }
                setShowDelete(!showDelete)
              }}
            >
              <i className='fa fa-ellipsis-h post-ellipsis' />
            </a>
            {/* DELETE */}
            {showDelete && (
              <div className='delete-modal'>
                <span
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    dispatch(handleDelete(data._id))
                    setShowDelete(false)
                  }}
                >
                  <i className='fa-solid fa-trash ' />
                  Delete tweet
                </span>
              </div>
            )}
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
          >
            {data.retweets.includes(userId) || retweet ? (
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
