import axios from 'axios'
const url = 'http://localhost:3000/twitter/clone/main/'
import axiosDispatch from './globals'
const mockUser = axios.create({
  baseURL: url,
})

export const getAllTweets = async () => {
  try {
    const response = await axiosDispatch.get('/')
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const getMyProfile = async () => {
  try {
    const response = await axiosDispatch.get('/myprofile')
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export const getMyTweets = async () => {
  try {
    const response = await axiosDispatch.get('/mytweets');
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getTweet = async (id) => {
  try {
    const response = await axiosDispatch.get(`/tweet/${id}`)
    return response.data
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
