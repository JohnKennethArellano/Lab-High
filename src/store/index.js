import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import admin from './modules/admin'
import teacher from './modules/teacher'
const store = createStore({
  state,
  mutations,
  actions,
  getters,

  modules: {
    admin,
    teacher
  }
})

export default store
