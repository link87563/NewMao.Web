import Vue from 'vue'
import Vuex from 'vuex'
import { state, actions, mutations } from './root.js'
import * as getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  // 嚴格模式,禁止直接修改state
  strict: true
})