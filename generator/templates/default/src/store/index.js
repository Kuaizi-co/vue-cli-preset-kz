import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'
import modules from './modules'

Vue.use(Vuex)

const strict = process.env.NODE_ENV !== 'production'

export default pageModules => {
  return new Vuex.Store({
    modules: {
      ...modules,
      ...pageModules
    },
    plugins,
    strict
  })
}
