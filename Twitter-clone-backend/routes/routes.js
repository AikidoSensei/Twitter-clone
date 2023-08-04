const express = require('express')
const router = express.Router();
// love my funny variables? [unlike, unretweet :)] naming is hard :(
const {
  getInitialData,
  getMyTweets,
  getMyProfile,
  getUser,
  getUserTweets,
  getMockUser,
  getTweet,
  postTweet,
  deleteTweet,
  getAllTweets,
  like,
  unlike,
  retweet,
  unretweet,
  follow,
  unfollow,
  postReply,
  deleteReply,
  likeReply,
  unlikeReply,
  retweetReply,
  unretweetReply,
  getReplies,
} = require('../controllers/handlers')


router.route('/initial').get(getInitialData)
router.route('/mockuser/:id').get(getMockUser)
router.route('/home').get(getAllTweets)
router.route('/follow/:id').post(follow).patch(unfollow)
router.route('/myprofile').get(getMyProfile)
router.route('/mytweets').get(getMyTweets)
router.route('/user/:id').get(getUser)
router.route('/usertweets/:id').get(getUserTweets)
router.route('/post').post(postTweet)
router.route('/tweet/:id').get(getTweet).delete(deleteTweet)
router.route('/like/:id').post(like).patch(unlike)
router.route('/retweet/:id').post(retweet).patch(unretweet)
router.route('/reply/:id').get(getReplies).post(postReply)
router.route('/reply').delete(deleteReply)
router.route('/like-reply/:id').post(likeReply).patch(unlikeReply)
router.route('/retweet-reply/:id').post(retweetReply).patch(unretweetReply)





module.exports = router