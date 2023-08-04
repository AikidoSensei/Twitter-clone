import React, { useState, useEffect } from 'react'
import niolabrown from '../../assets/niolabrown.jpg'
import defaultAvatar from '../../assets/default.webp'
import '../Center/Post.css'

import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTweet } from '../../features/MockUserSlice'
import {
  useLikeReplyMutation,
  useUnlikeReplyMutation,
  useRetweetReplyMutation,
  useUnretweetReplyMutation,
} from '../../features/ApiSlice'
import { handleDeleteReply } from '../../features/PopupSlice'

const Reply = ({ data }) => {
  const {
    user: { userId },
  } = useSelector((state) => state.loginUser)

  const [like, setLike] = useState(false)
  const [retweet, setRetweet] = useState(false)
  const [showDelete, setShowDelete] = useState(false);

  const [likeReply] = useLikeReplyMutation()
  const [unlikeReply] = useUnlikeReplyMutation()
  const [retweetReply] = useRetweetReplyMutation()
  const [unretweetReply] = useUnretweetReplyMutation()

  const handleLike = () => {
    if (!data.likes.includes(userId)) {
      likeReply(data._id)
      setLike(true)
    }
  }
  const handleUnLike = () => {
    console.log('try unlike')
    if (data.likes.includes(userId)) {
      unlikeReply(data._id)
      setLike(false)
    }
  }
  const handleRetweet = () => {
    if (!data.retweets.includes(userId)) {
      retweetReply(data._id)
      setRetweet(true)
    }
  }
  const handleUnretweet = () => {
    console.log('try unretweet')
    if (data.retweets.includes(userId)) {
      unretweetReply(data._id)
      setRetweet(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowDelete(false)
    })
    return window.removeEventListener('scroll', () => {
      setShowDelete(false)
    })
  })
  const dispatch = useDispatch()
  return (
    <article className='post__container' onClick={() => setShowDelete(false)}>
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
                    dispatch(
                      handleDeleteReply({
                        tweetId: data.tweetId,
                        replyId: data.replyId,
                      })
                    )
                    setShowDelete(false)
                  }}
                >
                  <i className='fa-solid fa-trash ' />
                  Delete reply
                </span>
              </div>
            )}
          </div>
          <div className='post__body'>
            <div className='post__text__content'>{data?.replyText}</div>
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

export default Reply
