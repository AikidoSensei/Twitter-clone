import React from 'react'
import icon from '../../assets/icon.png'

const ErrorOccured = () => {

  return (
    <div className='error-wrapper'>
      <div className="error-container">
       <div className="error-content">
       <img src={icon} alt="icon" />
       <h3>Error</h3>
       <p>Something went wrong, but dont fret--it's not your fault. <br/> Lets try again.</p>
       <a className='return' onClick={(e)=>{
        e.preventDefault();
        location.reload()
       }}>Refresh</a>
       </div>
      </div>
    </div>
  )
}

export default ErrorOccured
