import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
let lang = window.localStorage.lang || localLang || 'zh-CN'

// 小技巧，定义Vue.config.lang为用户语言环境
Vue.config.lang = lang

export default new VueI18n({
  // 默认已加载
  // locale: 'zh-CN',
  fallbackLocale: lang
})
