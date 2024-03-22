import Vuex from "vuex";
// import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import actions from './actions'
import { state } from "./state";


import admin from './modules/admin'
import teacher from './modules/teacher'
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,

  modules: {
    admin,
    teacher
  }
});