import axios from '@/axios'
export default {
  async login({ commit }, formData) {
    return axios.post('login', formData).then(({ data }) => {
      commit('setUserData', data)
      return data
    })
  }
}
