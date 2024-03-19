import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'

import admin from './modules/admin'
import teacher from './modules/teacher'
export default new Vuex.Store({
  state,
  mutations,
  actions,

  modules: {
    admin,
    teacher
  }
})
