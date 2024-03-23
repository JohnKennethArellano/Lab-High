import axios from 'axios'
import store from '../store/index'

const axiosAuth = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

axiosAuth.interceptors.request.use((config) => {
  const token = store.state.userData.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axiosAuth.defaults.withCredentials = false

export default axiosAuth
