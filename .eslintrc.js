module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'script',
    allowImportExportEverywhere: false,
    requireConfigFile: false,
    ecmaFeatures: {
      globalReturn: false,
      // 非 react 项目关闭 jsx 语法校验,默认为 true
      jsx: false
    }
  },
  extends: [
    'standard',
    'plugin:node/recommended',
    'plugin:security/recommended'
  ],
  plugins: [
    'node',
    'security'
  ],
  env: {
    node: true,
    es2021: true,
    commonjs: true
  },
  rules: {
    'space-before-function-paren': 0,
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
    'security/detect-object-injection': 0,
    'security/detect-non-literal-fs-filename': 0,
    'node/no-unsupported-features/es-syntax': [2, { ignores: ['modules'] }],
    'node/no-extraneous-require': ['error', {
      allowModules: [],
      resolvePaths: [__dirname, 'src/server/'],
      tryExtensions: ['.js']
    }],
    'node/no-unpublished-require': ['error', {
      allowModules: ['electron'],
      tryExtensions: ['.js', '.json']
    }],
    'node/no-missing-require': 1
  }
}
