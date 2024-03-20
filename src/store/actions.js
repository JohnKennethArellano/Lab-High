import axios from '@/axios/axios'
import axiosAuth from '@/axios/axioswithtoken'

export default {
  async login({ commit }, formData) {
    return await axios.post('login', formData).then(({ data }) => {
      commit('setUserData', data)
      return data
    })
  },
  showLogoutModal({ commit }, value) {
    commit('showLogOutModal', value)
  },
  async logoutUser({ commit }) {
    await axiosAuth.get('logout').then((data) => {
      commit('resetUserData')
      return data
    })
  }
}
