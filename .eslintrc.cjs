module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import', 'prettier'],
  rules: {
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    'react-hooks/exhaustive-deps': ['warn'],
    'arrow-body-style': ['error', 'as-needed'],
    'prettier/prettier': [
      2,
      {
        bracketSpacing: true,
        printWidth: 120,
        trailingComma: 'all',
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'auto',
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error', 'group', 'groupCollapsed', 'groupEnd', 'time', 'timeEnd'],
      },
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: false, peerDependencies: false },
    ],
  },
};
