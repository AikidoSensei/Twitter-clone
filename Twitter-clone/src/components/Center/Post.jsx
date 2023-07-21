import React from 'react'
import niolabrown from '../../assets/niolabrown.jpg'
import './Post.css'
import { Link } from 'react-router-dom'
const Post = () => {
  return (
    <article className='post__container'>
      <section className='main-post'>
        <Link to='/tweet'>
        <img src={niolabrown} className='post__avatar' alt='profile-img' />
        </Link>
        <div className='post__content'>
          <div className='post__title'>
            <div className='sbp__handle'>
              <h3>Niola </h3>
              <p>@Niola_brown</p>
            </div>
            <a className='icon-bg'>
              <i className='fa fa-ellipsis-h post-ellipsis' />
            </a>
          </div>
          <div className='post__body'>
            <div className='post__text__content'>
              Lorem ipsum dolor sit amet. Tempora iure ullam minima voluptas?
              Asperiores molestias cum quia porro. Dolore necessitatibus
              doloremque laboriosam dolores. Tenetur reprehenderit adipisci
              tempora at.
            </div>
            {<div className='media__container'></div>}
          </div>
        </div>
      </section>
      <div className='post__interact__wrapper'>
        <div className='post__interact__container'>
          <a className='comment-btn interact'>
            <i className='fa-regular fa-comment icon-bg comment-i' />
            10
          </a>
          <a className='retweet-btn interact'>
            <i className='fa-solid fa-retweet icon-bg retweet-i ' />
            10
          </a>
          <a className='heart-btn interact'>
            <i className='fa-regular fa-heart icon-bg heart-i ' />
            10
          </a>
          <a className='chart-btn interact'>
            <i className='fa-solid fa-chart-simple icon-bg chart-i' />
            10
          </a>
          <a className='share-btn interact'>
            <i className='fa-solid fa-arrow-up-from-bracket icon-bg share-i'/>
            10
          </a>
        </div>
      </div>
    </article>
  )
}

export default Post
