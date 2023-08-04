const { StatusCodes } = require('http-status-codes')

const Tweet = require('../models/tweets')
const User = require('../models/user')
const Reply = require('../models/replies')
const mockUsers = require('../users.json')

const getInitialData = async (req, res) => {
  console.log('someone got initial data')
  res.status(200).json(mockUsers)
}
const getMockUser = async (req, res) => {
  try {
    console.log('someone got mockuser')
    const user = mockUsers.find((user) => user.username === req.params.id)
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }
}
const getAllTweets = async (req, res) => {
  try {

    const tweets = await Tweet.find({});
    if(!tweets){
      res.status(StatusCodes.NOT_FOUND).json({msg:'not found'})
    }
    res.status(StatusCodes.OK).json(tweets)
  } catch (error) {
    console.log(error);
     res
       .status(StatusCodes.INTERNAL_SERVER_ERROR)
       .json({ msg: 'something went wrong please try again later' })
  }
}
const getMyProfile = async (req, res)=>{
  try {
    const user = await User.findOne({ _id: req.user.userId }).select('-password')
    if(!user){
      res.status(StatusCodes.NOT_FOUND).send('not found');
      return
    }
    res.status(StatusCodes.OK).json(user)
  } catch (error) {

  }
}

const postTweet = async (req, res) => {
  try {
    console.log(req.user);
    req.body.createdBy = req.user.userId
    req.body.username = req.user.username 
    req.body.name = req.user.name
    const tweet = await Tweet.create(req.body)
    const user = await User.findOne({_id:req.user.userId})
    user.tweets.push(tweet.tweetId)
    await user.save()
    res.status(StatusCodes.CREATED).json({tweet})
  } catch (error) {
   console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'something went wrong please try again later' })
  }
}
const deleteTweet = async (req, res)=>{
  try {
    const tweetId = req.params.id
    const userId = req.user.userId
    const tweet = await Tweet.findByIdAndDelete({_id:tweetId,
    createdBy:userId})
    if (!tweet){
    res.status(StatusCodes.NOT_FOUND).send('not found')
    }
    res.status(StatusCodes.OK).send('deleted')
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'something went wrong please try again later' })
  }
  
}
// DONE*******************
const getMyTweets= async (req, res) => {
  try {
    const userId = req.user.userId
    const myTweets = await Tweet.find({createdBy:userId})
    if(!myTweets){
      res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' })
      return;
    }
    res.status(StatusCodes.OK).json(myTweets)
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'something went wrong please try again later' })
  }
}
// DONE*********************
const getTweet = async (req, res) => {
  try {
    const id = req.params.id
    const tweet = await Tweet.findOne({tweetId:id})
    if(!tweet){
      res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' })
      return;
    }
    res.status(StatusCodes.OK).json(tweet)
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'something went wrong please try again later' })
  }
}
const getUser = async (req, res)=>{
  try {
    const id = req.params.id
    const user = await User.findById({ _id: id }).select('-password')
    if(!user){
      res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' });
      return;
    }
    res.status(StatusCodes.OK).json(user)
  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'something went wrong please try again later' })
  }
}

const getUserTweets = async (req, res)=>{
  try {
    const id = req.params.id
    const tweets = await Tweet.find({createdBy:id})
    if (!tweets) {
      res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' })
      return;
    }
    res.status(StatusCodes.OK).json(tweets)
  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'something went wrong please try again later' })
  }
}

const like = async (req, res)=>{
  try {
    const userId = req.user.userId
    const tweetId = req.params.id
    const tweet = await Tweet.findById({_id:tweetId})
   
    if(!tweet){
      res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' })
    }
    if(tweet.likes.includes(userId)){
      return;
    }

    const liked = tweet.likes.push(userId)
    await tweet.save()

    res.status(StatusCodes.CREATED).json(tweet)
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'something went wrong please try again later' })
  }
}


const unlike = async (req, res)=>{
  try {
   const userId = req.user.userId
   const tweetId = req.params.id
   const tweet = await Tweet.findOne({_id:tweetId}, )
      if (!tweet) {
        res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' })
      }
      if(!tweet.likes.includes(userId)){
        res.status(StatusCodes.FORBIDDEN).json({ msg: 'something went wrong' })
        return;
      }
      await tweet.likes.pull(userId)
      await tweet.save();
      res.status(StatusCodes.CREATED).json(tweet)
      
  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'something went wrong please try again later' })
  }
}
const retweet = async (req, res)=>{
   try {
     const userId = req.user.userId
     const tweetId = req.params.id
     const tweet = await Tweet.findById({ _id: tweetId })
     if (!tweet) {
       res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' })
     }
     if (tweet.retweets.includes(userId)) {
       res.status(StatusCodes.FORBIDDEN).json({ msg: 'cant like again' })
       return;
     }

     const retweets = tweet.retweets.push(userId)
     await tweet.save()


     res.status(StatusCodes.CREATED).json(tweet)
   } catch (error) {
     console.log(error)
     res
       .status(StatusCodes.INTERNAL_SERVER_ERROR)
       .json({ msg: 'something went wrong please try again later' })
   }
}
const unretweet = async (req, res)=>{
  try {
    const userId = req.user.userId
    const tweetId = req.params.id
    const tweet = await Tweet.findOne({ _id: tweetId })
    if (!tweet) {
      res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' })
    }
    if (!tweet.retweets.includes(userId)) {
      res.status(StatusCodes.FORBIDDEN).json({ msg: 'something went wrong' })
      return
    }
    await tweet.retweets.pull(userId)
    await tweet.save()
    res.status(StatusCodes.CREATED).json(tweet)
  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'something went wrong please try again later' })
  }
}
const follow = async (req, res)=>{
  try {
    const myId = req.user.userId //push to randomUsers followers
    const randomUserId = req.params.id //push to my following
    const randomUser = await User.findOne({ _id: randomUserId })
    const me = await User.findOne({ _id: myId })

    if(!randomUser || !me){
      res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' })
      return;
    }

    if (randomUser.followers.includes(myId) || me.following.includes(randomUserId)){
      res.status(StatusCodes.FORBIDDEN).json({ msg: 'forbidden' })
      return;
    }
     randomUser.followers.push(myId)
     await randomUser.save()
     me.following.push(randomUserId)
     await me.save()
 
     res.status(StatusCodes.CREATED).send('followed')
  }
  catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'something went wrong please try again later' })
  }
}
const unfollow = async (req, res)=>{
  try {
    const myId = req.user.userId //push to randomUsers followers
    const randomUserId = req.params.id //push to my following
    const randomUser = await User.findOne({_id:randomUserId})

    const me = await User.findOne({_id:myId})

    if(!randomUser || !me){
      res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' })
      return;
    }
    if (!randomUser.followers.includes(myId) || !me.following.includes(randomUserId)){
      res.status(StatusCodes.FORBIDDEN).json({ msg: 'forbidden' })
      return;
    }
     randomUser.followers.pull(myId)
     await randomUser.save()
     me.following.pull(randomUserId)
     await me.save()

     res.status(StatusCodes.CREATED).send('unfollowed')
  }
  catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'something went wrong please try again later' })
  }
}
const postReply = async (req, res)=>{
  try {
    req.body.createdBy = req.user.userId
    req.body.username = req.user.username 
    req.body.name = req.user.name
    req.body.tweetId = req.params.id
    const tweetId = req.params.id
    const reply = await Reply.create(req.body)
    const tweet = await Tweet.findOne({ _id:tweetId })
    if(!reply || !tweet){
      res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' })
      return;
    }

    tweet.comments.push(reply.replyId)
    await tweet.save()
    res.status(StatusCodes.CREATED).json(reply)
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'something went wrong please try again later' })
  }
}
const deleteReply = async (req, res)=>{
  try {
    const {tweetId, replyId} = req.query
    const userId = req.user.userId
    
    const reply = await Reply.findByIdAndDelete({
      _id: replyId,
      createdBy: userId,
    })
    const tweet = await Tweet.findOne({ _id: tweetId })
    
  if (!tweet || !reply) {
      res.status(StatusCodes.NOT_FOUND).send('not found')
      return;
    }
    await tweet.comments.pull(replyId)
    await tweet.save()

    res.status(StatusCodes.OK).json(reply)

  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'something went wrong please try again later' })
  }
}
const getReplies = async (req, res)=>{
  try {
    const tweetId = req.params.id
    const replies = await Reply.find({tweetId:tweetId})
    if(!replies){
      res.status(StatusCodes.NOT_FOUND).send('not found')
      return;
    }
    res.status(StatusCodes.OK).json(replies)
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'something went wrong please try again later' })
  }
}
const likeReply = async (req, res)=>{
  try {
    const replyId = req.params.id

    const userId = req.user.userId
    const reply = await Reply.findById({
      _id: replyId
    })

    if (!reply) {
      res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' })
      return;
    }
    if (reply.likes.includes(userId)) {
      res.status(StatusCodes.FORBIDDEN).json({ msg: 'cant like again' })
      return;
    }

    const liked = reply.likes.push(userId)
    await reply.save()

    res.status(StatusCodes.CREATED).json(reply)
  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'something went wrong please try again later' })
  }
}
const unlikeReply = async (req, res)=>{
  try {
    const userId = req.user.userId
    const replyId = req.params.id
    const reply = await Reply.findOne({ _id: replyId })
    if (!reply) {
      res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' })
    }

    if (!reply.likes.includes(userId)) {
      res.status(StatusCodes.FORBIDDEN).json({ msg: 'something went wrong' })
      return;
    }
    await reply.likes.pull(userId)
    await reply.save()
    res.status(StatusCodes.CREATED).json(reply)
  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'something went wrong please try again later' })
  }
}
const retweetReply = async (req, res)=>{
  try {
    const replyId = req.params.id
    const userId = req.user.userId

    const reply = await Reply.findById({
      _id: replyId,
    })

    if (!reply) {
      res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' })
      return;
    }
    if (reply.retweets.includes(userId)) {
      res.status(StatusCodes.FORBIDDEN).json({ msg: 'cant like again' })
      return;
    }

    const retweeted = reply.retweets.push(userId)
    await reply.save()

    console.log(reply.retweets.length)
    res.status(StatusCodes.CREATED).json(reply)
  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'something went wrong please try again later' })
  }
}
const unretweetReply = async (req, res)=>{
  try {
    const userId = req.user.userId
    const replyId = req.params.id
    const reply = await Reply.findOne({ _id: replyId })
    if (!reply) {
      res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' })
    }
    if (!reply.retweets.includes(userId)) {
      res.status(StatusCodes.FORBIDDEN).json({ msg: 'something went wrong' })
      return;
    }
    await reply.retweets.pull(userId)
    await reply.save()
    res.status(StatusCodes.CREATED).json(reply)
  } catch (error) {
    console.log(error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'something went wrong please try again later' })
  }
}


module.exports = {
  getInitialData,
  getMockUser,
  getAllTweets,
  getMyTweets,
  getMyProfile,
  getUser,
  getUserTweets,
  getTweet,
  postTweet,
  deleteTweet,
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
  getReplies
}
