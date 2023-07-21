import React from 'react'
import './SmallComponents.css'
import { useNavigate } from 'react-router-dom'
const BackBtn = () => {
   const navigate = useNavigate()
   const handleBack = () => {
     navigate(-1)
   }
  return (
    <div className='back-btn' onClick={handleBack}
      ><i className='fa-solid fa-arrow-left'></i>
    </div>
  )
}

export default BackBtn
