const mongoose = require('mongoose')

const ReplySchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
    replyId: {
      type: String,
      required: [true],
      default: function () {
        return this._id
      },
    },
    tweetId: {
      type: mongoose.Types.ObjectId,
      ref: 'Tweets',
      required: [true, 'Please provide tweets'],
    },
    replyText: {
      type: String,
      maxLength: 280,
    },
    username: {
      type: String,
      required: [true],
    },
    name: {
      type: String,
      required: [true],
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
  },
  { timestamps: true }
)

module.exports = mongoose.model('Replies', ReplySchema)
