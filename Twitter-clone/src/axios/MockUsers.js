import axios from 'axios'
const url = 'http://localhost:3000/twitter/clone/main/'
import axiosDispatch from './globals'
const mockUser = axios.create({
 baseURL:url
})

export const getMockData = async () => {
 try {
  const response =  await axiosDispatch.get('/initial');
  return response.data
 } catch (error) {
  console.log(error);
 }
}
export const getMockUser = async (user) => {
 try {
  const response =  await axiosDispatch.get(`mockuser/${user}`);
  return response.data
 } catch (error) {
  console.log(error);
 }
}

export default  mockUser