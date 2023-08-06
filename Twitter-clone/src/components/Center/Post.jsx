import React, { useState } from 'react'
import niolabrown from '../../assets/niolabrown.jpg'
import './Post.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getTweet } from '../../features/MockUserSlice'
import { handleUserError } from '../../features/PopupSlice'
const Post = ({data}) => {
  const {  name, username, avatar, tweet, comments, image, likes, retweets, views } = data
  const [like, setLike] = useState(false);
  const [retweet, setRetweet] = useState(false);
  
  const dispatch = useDispatch();
  return (
    <article className='post__container' onClick={(e)=>{
      e.stopPropagation()
      dispatch(handleUserError())
    }} >
      <section className='main-post'>
        <Link className='link-image'>
          <img src={avatar} className='post__avatar' alt='profile-img' />
        </Link>
        <Link
          className='post__content'
          onClick={() => {
            dispatch(
              getTweet({
                name,
                username,
                avatar,
                tweet,
                comments,
                image,
                likes,
                retweets,
                views,
              })
            )
          }}
        >
          <div className='post__title'>
            <div className='sbp__handle'>
              <h3>{name} </h3>
              <p>@{username}</p>
            </div>
            <a className='icon-bg'>
              <i className='fa fa-ellipsis-h post-ellipsis' />
            </a>
          </div>
          <div className='post__body'>
            <div className='post__text__content'>{tweet}</div>
            {
              <div className='media__container'>
                {image !== '' && <img src={image} alt='post-image' />}
              </div>
            }
          </div>
        </Link>
      </section>
      <div className='post__interact__wrapper'>
        <div className='post__interact__container'>
          <a className='comment-btn interact'>
            <i className='fa-regular fa-comment icon-bg comment-i' />
            {comments}
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
            {retweets}
          </a>
          <a
            className='heart-btn interact'
            style={{
              color: like ? '#e13535' : 'var(--twitter-primaryfont)',
            }}
            onClick={() => {
              setLike(!like)
            }}
          >
            {like ? (
              <i
                style={{ color: '#e13535' }}
                className='fa-solid fa-heart icon-bg heart-i'
              />
            ) : (
              <i className='fa-regular fa-heart icon-bg heart-i' />
            )}
            {likes}
          </a>
          <a className='share-btn interact'>
            <i className='fa-solid fa-arrow-up-from-bracket icon-bg share-i' />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Post
