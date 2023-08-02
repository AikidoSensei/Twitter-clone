import axios from 'axios'
const token = localStorage.getItem('usertoken')
console.log(token);

const axiosDispatch = axios.create({
  baseURL: 'http://localhost:3000/twitter/clone/main/',
  headers:{
   Accept: 'application/json',
   Authorization: `Bearer ${token}`
  }
})

export default axiosDispatch