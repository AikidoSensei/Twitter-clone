const User = require('../models/user')
const { StatusCodes } = require('http-status-codes')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
  const { name, email, username, password } = req.body

  if (!name || !email || !username || !password) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: 'please provide name, email, username, and password' })
  }
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({...req.body, password:hashedPassword })
  user.save()
  console.log(user)
  const token = user.createJWT()

  res
    .status(StatusCodes.CREATED)
    .json({
      user: {
        userId: user._id,
        name: user.name,
        username: user.username,
        joined: user.joined,
        followers: user.followers,
        following: user.following,
        tweets: user.tweets,
        location: user.location,
        bio: user.bio,
      },
      token,
    })
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: 'please provide valid credentials' })
    }
    const user = await User.findOne({ email })
    

    if (!user) {
      res.status(400).json({ msg: 'wrong email, username or password' })
      return;
    }
    const passwordCorrect = await user.comparePassword(password)
    console.log(passwordCorrect)
    if (!passwordCorrect) {
      res.status(401).json({ msg: 'wrong email or password' })
      return;
    }
    const token = user.createJWT()
    console.log('we have created the token');
    res.status(StatusCodes.OK).json({
      user: {
        userId: user._id,
        name: user.name,
        username: user.username,
        joined: user.joined,
        followers: user.followers,
        following: user.following,
        tweets: user.tweets,
        location: user.location,
        bio: user.bio,
      },
      token,
    })
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'something went wrong please try again later' })
  }
}

module.exports = { register, login }
