import React from 'react'

import '../Center/Post.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getTweet } from '../../features/MockUserSlice'
const UserPost = ({ post, user }) => {
  const {
    comments,
    image,
    likes,
    retweets,
    views,
    tweet
  } = post
  const {name, username, profile_image} = user;
  const dispatch = useDispatch()
  return (
    <article className='post__container'>
      <section className='main-post'>
          <img src={profile_image} className='post__avatar' alt='profile-img' />
        <Link
          to='/tweet/'
          className='post__content'
          onClick={() => {
            dispatch(
              getTweet({
                name,
                username,
                profile_image,
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
          <a className='retweet-btn interact'>
            <i className='fa-solid fa-retweet icon-bg retweet-i ' />
            {retweets}
          </a>
          <a className='heart-btn interact'>
            <i className='fa-regular fa-heart icon-bg heart-i ' />
            {likes}
          </a>
          <a className='chart-btn interact'>
            <i className='fa-solid fa-chart-simple icon-bg chart-i' />
            {views}
          </a>
          <a className='share-btn interact'>
            <i className='fa-solid fa-arrow-up-from-bracket icon-bg share-i' />
          </a>
        </div>
      </div>
    </article>
  )
}

export default UserPost
