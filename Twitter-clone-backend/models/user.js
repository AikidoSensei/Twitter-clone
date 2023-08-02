const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const month = new Date().getMonth()

const yearCreated = new Date().getFullYear()



const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide a name'],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, 'please provide an email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'please provide a username'],
    minLength: 3,
    maxLength: 50,
  },
  password: {
    type: String,
    required: [true, 'please provide password'],
    minLength: 6,
  },
  bio: {
    type: String,
    maxLength: 300,
  },
  joined: {
    type: String,
    default: monthNames[month] + ' ' + yearCreated,
  },
  location: {
    type: String,
    maxLength: 300,
  },
  followers: {
    type: [String],
  },
  following: {
    type: [String],
  },
  tweets: {
    type: [String],
  },
  profile_Image: {
    data: Buffer,
    contentType: String,
  },
  banner_Image: {
    data: Buffer,
    contentType: String,
  },
})

UserSchema.methods.comparePassword = async function(userPassword){
  const isValid = await bcrypt.compare(userPassword, this.password)
  console.log(userPassword)
  
  return isValid;
}
UserSchema.methods.createJWT = function(){
  return jwt.sign({userId:this._id, username:this.username, name:this.name}, process.env.JWT_SECRET, {expiresIn:'30d'})
}
module.exports = mongoose.model('User', UserSchema)
