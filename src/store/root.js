import * as types from './mutations_type.js'

import Vue from 'vue'

export const state = {
  page_title: ''
}

export const actions = {
  setPageTitle({ commit }, ptitle) {
    commit(types.PAGE_TITLE, ptitle)
  }
}

export const mutations = {
  [types.PAGE_TITLE](state,ptitle) {
    state.page_title = ptitle
  }
}