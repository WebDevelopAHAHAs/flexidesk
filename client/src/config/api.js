import axios from 'axios'

// Create an axios instance
export default axios.create({
  baseURL: 'https://flexidesk.herokuapp.com',
  timeout: 5000,
  withCredentials: true
})