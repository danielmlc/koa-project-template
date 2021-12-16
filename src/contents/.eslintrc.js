module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false
    },
    requireConfigFile: false
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    Vue: true,
    VueRouter: true
  },
  rules: {
    'space-before-function-paren': 0,
    'vue/no-mutating-props': 0,
    'vue/require-default-prop': 0,
    'prefer-const': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    complexity: [1, 10],
    'max-len': [
      1,
      {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true
      }
    ],
    'vue/html-indent': [1, 2, {
      alignAttributesVertically: false // vue html 模板缩进定义，我们不强制节点属性垂直对齐
    }],
    'vue/html-closing-bracket-newline': [ // html 关闭节点不需要另起一行
      'error',
      {
        singleline: 'never',
        multiline: 'never'
      }
    ],
    'vue/max-attributes-per-line': 0, // 关闭 html 模板中，一行最多允许默认 1 个属性的规则
    'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }] // vue 脚本缩进定义
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'template-curly-spacing': 'off' // 暂时加这一行是因为当前有 bug, 控制台会输出 ESLint 内部错误
      }
    }
  ]
}
