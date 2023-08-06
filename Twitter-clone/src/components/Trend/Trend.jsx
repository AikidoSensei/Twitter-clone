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
            <h2>No new trends!</h2>
            <p>It seems like there is not a lot to show you now</p>

            {/* <div className='trend'>
              <div className='title-trend'>
                <p>Sports Trending</p>
                <i className='fa fa-ellipsis-h post-ellipsis' />
              </div>
              <h4>Leo Messi</h4>
              <p>3000 Tweets</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trend
