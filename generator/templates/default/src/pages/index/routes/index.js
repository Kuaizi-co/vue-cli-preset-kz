const lazyLoader = (path) => () => import(/* webpackChunkName: "[request]" */ `../views/${path}.vue`)

// export default [
//   {
//     path: '/',
//     component: lazyLoader('home')
//   },
//   {
//     path: '/login',
//     component: lazyLoader('login')
//   }
// ]

export default [
  '',
  'login',
  'manage',
  'report',
  'system',
  'tag',
  'partner',
  'content',
  'account'
].map(router => {
  return {
    path: `/${router}`,
    // component: lazyLoader(router || 'home')
    // 演示，开发请用上面去加载各个页面模块
    component: lazyLoader(router === 'login' ? 'login' : 'home')
  }
})
