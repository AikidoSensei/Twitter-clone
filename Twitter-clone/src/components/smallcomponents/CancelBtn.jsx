import React from 'react'
import './SmallComponents.css'
import { useSelector, useDispatch } from 'react-redux'
import { handleTweet, handleVerified, handleMobile } from '../../features/PopupSlice'
const CancelBtn = (e) => {
  const {tweet, verified, mobileSideBar } = useSelector(store=>store.popup)
  const dispatch = useDispatch();

  const handleCancelBtn = (e)=>{
      e.stopPropagation()
    if(tweet === true){
      dispatch(handleTweet())
    }
    if(verified === true){
      dispatch(handleVerified())
    }
    if (mobileSideBar === true){
      dispatch(handleMobile())
    }
    return;
  }
  return (
    <div className='back-btn' onClick={handleCancelBtn}>
     <i className="fa-solid fa-xmark"/>
    </div>
  )
}

export default CancelBtn