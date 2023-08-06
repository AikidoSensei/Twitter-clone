import React from 'react'
import icon from '../../assets/icon.png'
import { useDispatch } from 'react-redux'
import { handleUserError } from '../../features/PopupSlice'
const UserError = () => {
 const dispatch = useDispatch()
  return (
    <div className='error-wrapper'>
      <div className='error-container' onClick={(e)=>{
       e.stopPropagation()
      }}>
        <div className='error-content'>
          <img src={icon} alt='icon' />
          <h3>Error</h3>
          <p>
            You can not interact with this tweet. This user has not been
            verified   <i className='fa-solid fa-circle-check verified' />
            <br />
            Please excuse our euphemism for mock user
          </p>
          <a
            className='return'
            onClick={(e) => {
              e.preventDefault()
              dispatch(handleUserError())
            }}
          >
            Cancel
          </a>
        </div>
      </div>
    </div>
  )
}

export default UserError
