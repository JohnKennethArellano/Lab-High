import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import createPersistedState from 'vuex-persistedstate'
import admin from './modules/admin'
import teacher from './modules/teacher'
const store = createStore({
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()],
  modules: {
    admin,
    teacher
  }
})

export default store
