import axios from 'axios'
const token = localStorage.getItem('usertoken')


const axiosDispatch = axios.create({
  baseURL:
    'https://twitter-clone-backend-8aw8.onrender.com/twitter/clone/main/',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

export default axiosDispatch