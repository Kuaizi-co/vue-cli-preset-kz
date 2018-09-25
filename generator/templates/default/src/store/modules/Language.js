import i18n from '@/i18n'
import * as types from '../mutation-type'

const state = {
  locale: '',
  loadedLanguages: []
}

const actions = {
  setSystemLanguage ({ commit, state }, lang) {
    if (state.locale !== lang) {
      if (!state.loadedLanguages.includes(lang)) {
        return import(/* webpackChunkName: "lang-[request]" */ `@/i18n/${lang}`).then(msgs => {
          i18n.setLocaleMessage(lang, msgs.default)
          commit(types.LANG_CHANGE, lang)
          commit(types.LANG_ADD_NEW, lang)
        })
      }
      commit(types.LANG_CHANGE, lang)
      return Promise.resolve(lang)
    }
    commit(types.LANG_CHANGE, lang)
    return Promise.resolve(lang)
  }
}

const mutations = {
  [types.LANG_CHANGE] (state, lang) {
    i18n.locale = lang
    window.localStorage.lang = lang
    state.locale = lang
  },
  [types.LANG_ADD_NEW] (state, lang) {
    state.loadedLanguages.push(lang)
  }
}

export default {
  state,
  actions,
  mutations
}
