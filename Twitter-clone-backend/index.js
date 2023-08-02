require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
const authRoute = require('./routes/authRoute')
const handleRoute = require('./routes/routes')
//DB CONNECT
const connectDB = require('./db/connect')
const userAuthentication = require('./middlewares/authenticate')

app.use(express.json())
app.use('/twitter/clone/auth', authRoute)
app.use('/twitter/clone/main',userAuthentication, handleRoute)

//userAuthentication (my-authentication middleware)

const PORT = process.env.PORT || 5000

const kickStart = async ()=>{
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => {

      console.log(`Server running at ${PORT}...`)

    })
  } catch (error) {
    console.log(error);
  }
}

kickStart();