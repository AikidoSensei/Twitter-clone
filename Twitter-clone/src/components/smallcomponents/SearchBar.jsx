import React from 'react'

const SearchBar = () => {
  return (
      <div className='searchbar-container'>
        <div className='searchbar'>
          <i className='fa-solid fa-magnifying-glass'/>
          <input type='text' placeholder='Search Twitter' />
        </div>
    </div>
  )
}

export default SearchBar
