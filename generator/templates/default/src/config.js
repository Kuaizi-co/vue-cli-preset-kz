const config = {
  webConfig: {
    title: 'Kuaizi™ - 领先的人工智能创意平台',
    copyright: 'Copyright © 2013-2018 All Rights Reserved 广州筷子信息科技有限公司'
  },
  dev: {
    baseURL: '/mock'
  },
  prod: {
    baseURL: '/'
  }
}

/**
 * 获取导航配置数组
 * @param {Array} arr 导航配置数组
 * @return [{ name: '首页', link: '/', route: true }, ...]
 */
const getNavArr = arr => arr.map(name => ({
  name: `header.nav.${name}`,
  // name: name.charAt(0).toUpperCase() + name.substr(1, name.length),
  link: `/${name === 'home' ? '' : name}`,
  icon: `nav-icon-${name}`,
  route: true
}))

const navigators = ['home', 'manage', 'report', 'system', 'tag', 'content', 'account']
export const navList = getNavArr(navigators)

export const webConfig = config.webConfig
export default process.env.NODE_ENV === 'production' ? config.prod : config.dev
