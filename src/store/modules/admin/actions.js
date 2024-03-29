import axiosClient from '@/axios'

export default {
  //sample register function using axios
  async registerUser({ commit }, formData) {
    await commit('showLoading', true, { root: true })
    console.log('submitted')
    return await axiosClient
      .post('url', formData)
      .then(async ({ data }) => {
        await commit('showLoading', false, { root: true })
        return data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
