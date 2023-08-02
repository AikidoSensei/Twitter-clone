const User = require('../models/user')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next)=>{
 const authHeader = req.headers.authorization
 if(!authHeader || !authHeader.startsWith('Bearer')){
  res.status(401).json({msg:'Authentication error'})
  return;
 }
 const token = authHeader.split(' ')[1]

 try {
  const verify =  jwt.verify(token, process.env.JWT_SECRET)
  
  req.user = {userId:verify.userId, username:verify.username, name:verify.name }
  next()
 } catch (error) {
  res.status(401).json({msg:'Authentication failed'})
 }
}

module.exports = auth