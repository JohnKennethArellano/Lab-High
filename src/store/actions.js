import axios from '@/axios/axios'
import axiosAuth from '@/axios/axioswithtoken'

export default {
  async login({ commit }, formData) {
    commit('toggleLoader', true)
    return await axios.post('login', formData).then(({ data }) => {
      commit('setUserData', data)
      commit('toggleLoader', false)
      return data
    })
  },
  showLogoutModal({ commit }, value) {
    commit('showLogOutModal', value)
  },
  async logoutUser({ commit }) {
    commit('toggleLoader', true)
    await axiosAuth.get('logout').then((data) => {
      commit('setUserData', '')
      commit('toggleLoader', false)
      return data
    })
  }
}
