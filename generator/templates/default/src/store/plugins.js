/**
 * vuex 日志插件
*  by Vincent1993
*  https://github.com/Vincent1993/V2EX-mobile/blob/master/src/store/plugins.js
 */

const plugins = []

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('vuex/dist/logger')

  plugins.push(createLogger({
    collapsed: true
  }))
}

export default plugins
