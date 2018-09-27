// https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/promptModules/vuex.js
// module.exports = cli => {
//   cli.injectFeature({
//     name: 'cssPreprocessor',
//     type: 'list',
//     ...
//   })

//   cli.injectPrompt({
//     name: 'routerHistoryMode',
//     when: answers => answers.features.includes('router'),
//     type: 'confirm',
//     ...
//   })

//   cli.onPromptComplete((answers, options) => {
//     if (answers.features.includes('router')) {
//       options.router = true
//       options.routerHistoryMode = answers.routerHistoryMode
//     }
//   })
// }

module.exports = [
  {
    name: 'cssPreprocessor',
    type: 'list',
    message: 'Add support for CSS pre-processors like Sass or Less',
    choices: [
      {
        name: 'Less',
        value: 'less'
      },
      {
        name: 'Sass/SCSS',
        value: 'sass'
      }
    ],
    default: 'less'
  },
  // {
  //   name: 'eslint',
  //   type: 'list',
  //   message: 'Pick a linter / formatter config:',
  //   choices: [
  //     {
  //       name: 'Standard',
  //       value: 'standard'
  //     },
  //     {
  //       name: 'Airbnb',
  //       value: 'airbnb'
  //     }
  //   ],
  //   default: 'standard'
  // },
  {
    name: 'Vue Router mode',
    type: 'list',
    message: 'Choice Vue Router History mode',
    choices: [
      {
        name: 'Hash',
        value: 'hash'
      },
      {
        name: 'history',
        value: 'history'
      }
    ],
    default: 'hash'
  },
  {
    name: 'Typescript',
    type: 'confirm',
    message: 'Add support for the TypeScript language (default: None)',
    default: false
  },
  {
    name: 'pwa',
    type: 'confirm',
    message: 'Progressive Web App (PWA) Support (default: None)',
    default: false
  },
  {
    name: 'SSR',
    type: 'list',
    message: 'Add support for Server-Side Rendering',
    choices: [
      {
        name: 'None',
        value: 'none'
      },
      {
        name: 'Nuxt',
        value: 'nuxt'
      },
      {
        name: 'egg.js',
        value: 'egg'
      }
    ],
    default: 'none'
  },
  {
    name: 'ui-framework',
    type: 'list',
    message: 'choice UI Framework',
    choices: [
      {
        name: 'iView',
        value: 'iview'
      },
      {
        name: 'Element UI',
        value: 'element-ui'
      }
    ],
    default: 'iview'
  },
  {
    name: 'Mock Server',
    type: 'list',
    message: 'choice mock server',
    choices: [
      {
        name: 'Easy Mock',
        value: 'easymock'
      },
      {
        name: 'Kuaizi db',
        value: 'kzdb'
      }
    ],
    default: 'easymock'
  },
  {
    name: 'Server Port',
    type: 'input',
    message: 'Input DevServer Port(default: 8081)',
    default: '8081',
    validate: (n) => {
      return !isNaN(+n)
    }
  }
]