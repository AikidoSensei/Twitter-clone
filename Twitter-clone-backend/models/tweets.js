const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema({
  createdBy:{
   type:mongoose.Types.ObjectId,
   ref:'User',
   required:[true, 'Please provide user']
  }
  ,
  tweetId: {
    type: String,
    required: [true],
    default: function () {
      return this._id
    },
  },
  tweetText: {
    type: String,
    maxLength: 280,
  },
  username: {
    type: String,
    required: [true],
  },
  name: {
    type: String,
    // required: [true],
  },
  profile_Image: {
    data: Buffer,
    contentType: String,
  },
  likes: {
    type: [String],
  },
  retweets: {
    type: [String],
  },
  comments: {
    type: [String],
  },
},
{timestamps:true}
)

module.exports = mongoose.model('Tweets', TweetSchema)