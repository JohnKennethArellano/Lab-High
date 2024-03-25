import axios from 'axios'

const axiosClient = axios.create({
  //baseURL: "/api",
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ${store.state.user.token}'
    //'X-Requested-With': 'XMLHttpRequest',
  }
})

axiosClient.defaults.withCredentials = false

export default axiosClient
