import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/**
 * 生成路由函数
 * @param {*} conf 路由配置
 * @param {*} parent 父路由名称
 */
export const generateRoutes = (conf, lazyLoader, parent) => {
  let result
  let path
  let name
  let componentPath
  if (conf) {
    path = (parent || '') + '/' + (conf.path || conf.name)
    name = parent ? parent + '_' + conf.name : conf.name
    componentPath = conf.template ? conf.template : path.replace(/^\//g, '') + (conf.children && conf.children.length > 0 ? '/index' : '')

    result = {
      path,
      name: conf.routeName || name,
      redirect: conf.redirect,
      alias: conf.alias,
      props: conf.props,
      meta: conf.meta,
      children: conf.children && conf.children.length > 0 ? conf.children.map(c => generateRoutes(c, lazyLoader, path)) : [],
      component: lazyLoader(componentPath)
    }
  }
  return result
}

export default (store, routes = [], options = {}) => {
  Vue.use(VueRouter)
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
