import React, { useState } from 'react'
import './Popups.css'
import {useDeleteReplyMutation} from '../../features/ApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { handleDeleteReply } from '../../features/PopupSlice'
const DeleteReply = ({ id }) => {

  const { deleteReplyIds } = useSelector((store) => store.popup)
  const dispatch = useDispatch()


  const [deleteReply] = useDeleteReplyMutation()
 

  const handleDelete = () => {
      deleteReply(deleteReplyIds)
      dispatch(handleDeleteReply({}))
  }
  return (
    <div className='confirm-delete-wrapper'>
      <div className='confirm-delete' onClick={(e) => e.preventDefault()}>
        <div className='delete-title'>
          <h3>Delete reply?</h3>
          <p>
            This can’t be undone and it will be removed from your profile, the
            timeline of any accounts that follow you, and from Twitter search
            results.
          </p>
        </div>
        <button className='delete-btn' onClick={handleDelete}>
          Delete
        </button>
        <button className='cancel-delete'>Cancel</button>
      </div>
    </div>
  )
}

export default DeleteReply
