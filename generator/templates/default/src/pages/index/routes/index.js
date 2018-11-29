import { generateRoutes } from '@/router'
const lazyLoader = (path) => () => import(/* webpackChunkName: "view-[request]" */ `../views/${path}`)

// 一级子路由名称，对应 `./routes/子路由配置.js`
// 确定`./routes`目录存在对应文件，否则require报错
const childRoutesName = ['manage', 'report', 'system']
// 通过`kz serve --route 子路由1，子路由2` 或 `.env.local` 来定义只访问指定的子路由
// eslint-disable-next-line
const allowRoutes = (process.env.VUE_APP_ALLOW_ROUTES || '').split(',')
const childRoutes = allowRoutes.length && allowRoutes[0] !== '' ?
                      childRoutesName.filter(route => allowRoutes.includes(route))
                      : childRoutesName
// 生成子路由配置
const childRoutesConf = childRoutes.map(name => generateRoutes(require(`./${name}`).default, lazyLoader)).filter(route => route)

export default [
  '',
  'login',
  '*'
].map(router => {
  return {
    path: router === '*' ? router : `/${router}`,
    component: lazyLoader(router === '' ? 'home': (router === '*' ? '404' : router)),
    meta: {
      sidebar: ['*', 'login'].includes(router) ? 0 : 1
    }
  }
}).concat(childRoutesConf)
