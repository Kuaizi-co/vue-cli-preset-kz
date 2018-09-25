const glob = require('glob')
const path = require('path')
const resolve = folder => path.resolve(__dirname, folder)
// 多页面入口路径
const PAGE_PATH = resolve('src/pages')

/**
 * 获取多页面配置对象
 */
function getPagesConfig() {
  const pages = {}
  // 规范中定义每个单页文件结构
  // index.html,main.js,App.vue
  glob.sync(PAGE_PATH + '/*/main.js')
      .forEach(filePath => {
        const pageName = path.basename(path.dirname(filePath))
        pages[pageName] = {
          entry: filePath,
          // 除了首页，其他按第二级目录输出
          // 浏览器中直接访问/news,省去/news.html
          fileName: `${pageName === 'index' ? '' : pageName + '/'}index.html`,
          template: path.dirname(filePath) + '/index.html'
        }
      })
  return pages
}

/**
 * 样式预处理器全局变量资源插件
 * @param {String} rule webpack 规则
 */
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve('./src/assets/<%= options.cssPreprocessor%>/var.<%= options.cssPreprocessor%>'),
      ],
    })
}

module.exports = {

  // 多页配置
  pages: {
    ...getPagesConfig()
    // ,
    // 手动设置单页
    // about: 'src/pages/about/main.js'
  },

  // 扩展webpack配置
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')

    config.resolve
            .alias
              .set('assets', resolve('src/assets'))
              .set('components', resolve('src/components'))
              .set('I18n', resolve('src/i18n'))
              .set('View', resolve('src/view'))
              .set('Lib', resolve('src/lib'))
              .set('API', resolve('src/lib/services'))
    
    // 添加 css 全局变量资源插件
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(
      type => addStyleResource(config.module.rule('<%= options.cssPreprocessor%>').oneOf(type))
    )
  },

  // 开发服务器配置
  devServer: {
    port: `<%= options['Server Port'] %>`,
    proxy: {
      '/mock': {
        target: 'https://easy-mock.com/mock/5ba83adde786c911a33a5090',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '/mock': ''
        }
      }
    }
  },

  // 样式
  // css: {
  //   loaderOptions: {}
  // }

  // 插件配置
  pluginOptions: {
  }
}