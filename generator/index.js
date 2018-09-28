const fs = require('fs')

module.exports = (api, opts, rootOpts) => {
  
  // 添加 npm 命令
  api.extendPackage({
    scripts: {
      dev: 'vue-cli-service serve --copy',
      build: 'vue-cli-service build',
      review: 'serve -s dist'
    }
  })

  // 开发依赖包
  api.extendPackage({
    devDependencies: {
      'serve': '^10.0.1',
      'style-resources-loader': '1.2.1'
    }
  })

  api.extendPackage({
    dependencies: {
      'axios': '^0.18.0',
      'babel-polyfill': '^6.22.0',
      'lodash': '^4.17.11',
      'normalize.css': '^8.0.0',
      'nprogress': '^0.2.0',
      'vue-i18n': '^8.1.0',
      'countup': '^1.8.2',
      "echarts": "^4.2.0-rc.1",
      [opts['ui-framework']]: opts['ui-framework'] === 'element-ui' ? '^2.4.7' : '^3.1.1'
    }
  })

  // # less
  if (opts['cssPreprocessor'] === 'less') {
    api.extendPackage({
      devDependencies: {
        "less": "^2.7.2",
        "less-loader": "^3.0.0"
      }
    })
  }

  // # sass
  if (opts['cssPreprocessor'] === 'sass') {
    api.extendPackage({
      devDependencies: {
        "node-sass": "^4.9.3",
        "sass-loader": "^7.1.0"
      }
    })
  }

  // 扩展.babelrc 配置
  api.extendPackage({
    babel: {
      env: {
        test: {
          plugins: ["babel-plugin-transform-es2015-modules-commonjs"]
        }
      }
    }
  })

  // 扩展 .eslintrc 配置
  api.extendPackage({
    eslintConfig: {
      "rules": {
        "vue/no-parsing-error": [
          2,
          { "x-invalid-end-tag": false }
        ]
      }
    }
  })

  // 删除多余的模板
  api.render(files => {
    Object.keys(files)
          .filter(path => path.startsWith('src/') || path.startsWith('public/'))
          .forEach(path => delete files[path])
  })



  // 选择生成的模板
  // if (opts.Typescript) {
  //   api.render("./templates/ts")
  // } else 
  if(opts.SSR === 'nuxt') {
    api.render("./templates/nuxt")
  // } else if (opts.SSR === 'egg') {
  //   api.render("./templates/egg")
  } else {
    api.render("./templates/default")
  }

  // 删除多余目录
  const pwaFiles = [
    'public/robots.txt',
    'public/manifest.json',
    'src/registerServiceWorker.js',
    'public/icons/android-chrome-192x192.png',
    'public/icons/apple-touch-icon-152x152.png',
    'public/icons/msapplication-icon-144x144.png',
    'public/icons/safari-pinned-tab.svg'
  ]

  if (opts.pwa) {
    api.extendPackage({
      dependencies: {
        "register-service-worker": "^1.0.0",
        "sass-loader": "^7.1.0"
      },
      devDependencies: {
        "@vue/cli-plugin-pwa": "^3.0.3"
      }
    })
  }

  // hack, 注入内置插件
  // opts.plugins['@vue/cli-plugin-e2e-nightwatch'] = {}
  if (opts.e2e === 'nightwatch') {
    api.extendPackage({
      devDependencies: {
        '@vue/cli-plugin-e2e-nightwatch': '^3.0.4'
      }
    })
    api.extendPackage(() => {
      try{
        const loadNightwatch = require('@vue/cli-plugin-e2e-nightwatch/generator')
        loadNightwatch(api, opts, rootOpts, api.invoking)
      } catch(err) {
        console.log('please `npm i -g @vue/cli-plugin-e2e-nightwatch`')
      }
    })
  }
  if (opts.unit === 'mocha') {
    api.extendPackage({
      devDependencies: {
        '@vue/cli-plugin-unit-mocha': '^3.0.4'
      }
    })
    api.extendPackage(() => {
      try{
        const loadMocha = require('@vue/cli-plugin-unit-mocha/generator')
        loadMocha(api, opts, rootOpts, api.invoking)
      } catch(err) {
        console.log('please `npm i -g @vue/cli-plugin-unit-mocha`')
      }
    })
  }

  api.render(files => {
    Object.keys(files)
            .filter(path => path.includes(`/${opts.cssPreprocessor === 'sass' ? 'less' : 'sass' }/`))
            .forEach(path => delete files[path])
    
    if (!opts.pwa) {
      Object.keys(files)
            .filter(path => {
                return pwaFiles.find(file => path.includes(file))
            })
            .forEach(path => delete files[path])
    }
  })
}