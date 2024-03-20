import axios from 'axios'
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const token = store.state.userData.token
const axiosWithToken = axios.create({
  baseURL: 'http://192.168.68.159:8080/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})

axiosWithToken.defaults.withCredentials = true

export default axiosWithToken
