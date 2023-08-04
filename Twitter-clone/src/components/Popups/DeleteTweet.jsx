import React,{useState} from 'react'
import './Popups.css'
import { useDeletePostMutation, useDeleteReplyMutation } from '../../features/ApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import { handleDeleteReply } from '../../features/PopupSlice'
const DeleteTweet = ({id}) => {
   
   const dispatch = useDispatch();

   const [showConfirmDelete, setShowConfirmDelete] = useState(false)
   const [deleteTweet] = useDeletePostMutation()
   const [deleteReply] = useDeleteReplyMutation()

  
   const handleDelete = ()=>{
    deleteTweet(id)
   }
  return (
   <div className="confirm-delete-wrapper">
    <div className='confirm-delete' onClick={(e) => e.preventDefault()}>
      <div className='delete-title'>
        <h3>Delete Tweet?</h3>
        <p>
          This can’t be undone and it will be removed from your profile, the
          timeline of any accounts that follow you, and from Twitter search
          results.
        </p>
      </div>
      <button className='delete-btn' onClick={handleDelete}>Delete</button>
      <button
        className='cancel-delete'
      >
        Cancel
      </button>
    </div>
   </div>
  )
}

export default DeleteTweet
