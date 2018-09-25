import Vue from 'vue'
import api from 'API'
import * as types from '../mutation-type'

const state = JSON.parse(window.localStorage.getItem('User')) || {}

const actions = {
  userSignIn ({ commit }, user) {
    return api.fetch({
      method: 'post',
      url: '/login',
      data: user
    }).then(data => {
      commit(types.USER_SIGN_IN, data)
    })
  },
  userSignOut ({ commit }) {
    commit(types.USER_SIGN_OUT)
    return Promise.resolve(true)
  }
}

const mutations = {
  async [types.USER_SIGN_IN] (state, user) {
    window.localStorage.setItem('User', JSON.stringify(user))
    Object.assign(state, user)
  },
  [types.USER_SIGN_OUT] (state) {
    window.localStorage.removeItem('User')
    Object.keys(state)
      .forEach(item => Vue.delete(state, item))
  }
}

export default { state, mutations, actions }
