import React, { useState, useEffect } from 'react'
import '../smallcomponents/SmallComponents.css'
import icon from '../../assets/icon.png'
import niolabrown from '../../assets/niolabrown.jpg'
import { useDispatch } from 'react-redux'
import { handleMobile } from '../../features/PopupSlice'
const Blur = () => {
  const [forYou, setForYou] = useState(true)
  const dispatch = useDispatch()

  const [displayNav, setDisplayNav] = useState(false)

  const handleDisplayNav = () => {
    if (window.scrollY > 200) {
      setDisplayNav(true)
    } else {
      setDisplayNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleDisplayNav)
  }, [])
 
  return (
    <div className={displayNav ? 'blur-up blur-container': 'blur-container'}>
      <div className='top-blur'>
        <h2>Home</h2>
        <img
          src={niolabrown}
          className='mobile-avatar'
          alt='mobile-avatar'
          onClick={(e) => {
            e.stopPropagation()
            dispatch(handleMobile())
          }}
        />
        <img src={icon} className='icon' alt='icon' />
      </div>
      <div className='for-you'>
        <a
          style={{
            color: `${
              forYou ? 'var(--twitter-black)' : 'var(--twitter-dark-gray)'
            }`,
          }}
          onClick={() => {
            setForYou(true)
          }}
        >
          For you {forYou && <span className='blue-line'></span>}
        </a>
        <a
          style={{
            color: `${
              !forYou ? 'var(--twitter-black)' : 'var(--twitter-dark-gray)'
            }`,
          }}
          onClick={() => {
            setForYou(false)
          }}
        >
          Following {forYou || <span className='blue-line'></span>}
        </a>
      </div>
    </div>
  )
}

export default Blur
