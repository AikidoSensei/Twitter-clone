import React from 'react'
import niolabrown from '../../assets/niolabrown.jpg'
import './SingleTweet.css'
import BackBtn from '../smallcomponents/BackBtn'
import QuickTweet from '../smallcomponents/QuickTweet'
import Post from '../Center/Post'
const SingleTweet = () => {
  return (
    <div className='home-center-wrapper'>
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
                  src={niolabrown}
                  className='post__avatar'
                  alt='profile-img'
                />
                <div className='sbp__handle'>
                  <h3>Niola </h3>
                  <p>@Niola_brown</p>
                </div>
              </div>
              <a className='icon-bg'>
                <i className='fa fa-ellipsis-h post-ellipsis' />
              </a>
            </div>
            <div className='tweet__body__container'>
             <div className="tweet__body">
              <div className='post__text__content'>
                Lorem ipsum dolor sit amet. Tempora iure ullam minima voluptas?
                Asperiores molestias cum quia porro. Dolore necessitatibus
                doloremque laboriosam dolores. Tenetur reprehenderit adipisci
                tempora at.
              </div>
              {<div className='media__container'></div>}
             </div>
            </div>
          </div>
        </section>
        <div className='tweet-activity-container'>
          <div className='tweet-activity'>
            <p>
              3000 <span>Retweets</span>
            </p>
            <p>
              1000 <span>Quotes</span>
            </p>
            <p>
              9000 <span>Likes</span>
            </p>
            <p>
              2000 <span>Bookmarks</span>
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
        <QuickTweet/>
        <div className="tweet-container">
         <Post/>
        </div>
      </div>
    </div>
  )
}

export default SingleTweet
