import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

export default (store, routes = [], options = {}) => {
  // 默认对路由不验证
  options = Object.assign({ validate: true }, options)

  const router = new VueRouter({
    // H5 history

    routes
  })

  // 切换路由之前
  router.beforeEach(({ meta, path }, from, next) => {
    // 判断是否登录
    const { auth = options.validate } = meta
    const isLogin = Boolean(store.state.User.uid)

    NProgress.start()

    // 进入下一个路由
    if (auth) {
      if (!isLogin && path !== '/login') return next({ path: '/login' })
      if (isLogin && path === '/login') return next({ path: '/' })
      next()
    } else {
      next()
    }
  })

  // 切换路由完成
  router.afterEach(route => {
    NProgress.done()
  })

  return router
}
