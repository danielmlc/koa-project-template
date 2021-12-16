const path = require('path')
module.exports = {
  global: {
    cwd: __dirname,
    clear: ['dist'],
    copy: {
      'src/static': 'dist/static',
      'node_modules/vue/dist': 'dist/contents/lib/vue',
      'node_modules/vuex/dist': 'dist/contents/lib/vuex',
      'node_modules/vue-router/dist': 'dist/contents/lib/vue-router',
      'node_modules/element-mini-ui/lib': 'dist/contents/lib/element-mini-ui',
      'node_modules/element-extension/lib': 'dist/contents/lib'
    },
    eslint: {
      lint: true,
      option: {
        fix: true,
        quiet: false
      }
    },
    browserVue: {
      rootOutPath: 'dist/contents/',
      packerConfig: {
        resolve: {
          alias: {
            Contents: path.resolve(__dirname, 'src/contents/'),
            Root: path.resolve(__dirname, '')
          },
          extensions: ['.js', '.json', '.jsx', '.vue']
        }
      }
    },
    node: {
      rootOutPath: 'dist/',
      packerConfig: {
        resolve: {
          alias: {
            Server: path.resolve(__dirname, 'src/server/'),
            Root: path.resolve(__dirname, '')
          },
          extensions: ['.js', '.json']
        },
        node: {
          __dirname: false,
          __filename: false
        }
      }
    }
  },
  server: {
    port: 8088,
    staticPath: 'dist/contents/',
    packerConfig: {
    }
  },
  entries: {
    server: {
      type: 'node',
      input: 'src/server/app.js',
      output: {
        filePath: 'server',
        fileName: 'app'
      }
    },
    loginPage: {
      type: 'browserVue',
      title: '登录',
      input: 'src/contents/modules/login-page/index.js'
    },
    homePage: {
      type: 'browserVue',
      title: '首页',
      input: 'src/contents/modules/home-page/index.js'
    }
  }
}
