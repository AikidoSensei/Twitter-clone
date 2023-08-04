import React from 'react'
import SearchBar from '../smallcomponents/SearchBar'
import './Trend.css'

const Trend = () => {

  return (
    <div className='trend-wrapper'>
      <div className='trend-container'>
        <div className='trend-content'>
          <SearchBar />
          <div className='main-trends'>
            <h2>Trends for you</h2>
            <div className='trend'>
              <div className='title-trend'>
                <p>Sports Trending</p>
                <i className='fa fa-ellipsis-h post-ellipsis' />
              </div>
              <div className="body-trend">
              <h4>Leo Messi</h4>
              <p>3000 Tweets</p>
              </div>
            </div>
            <div className='trend'>
              <div className='title-trend'>
                <p>Sports Trending</p>
                <i className='fa fa-ellipsis-h post-ellipsis' />
              </div>
              <h4>Leo Messi</h4>
              <p>3000 Tweets</p>
            </div>
            <div className='trend'>
              <div className='title-trend'>
                <p>Sports Trending</p>
                <i className='fa fa-ellipsis-h post-ellipsis' />
              </div>
              <h4>Leo Messi</h4>
              <p>3000 Tweets</p>
            </div>
            <div className='trend'>
              <div className='title-trend'>
                <p>Sports Trending</p>
                <i className='fa fa-ellipsis-h post-ellipsis' />
              </div>
              <h4>Leo Messi</h4>
              <p>3000 Tweets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trend
