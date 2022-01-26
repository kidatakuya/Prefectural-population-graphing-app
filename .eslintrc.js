module.exports = {
  'env': {
    browser: true,
    es2021: true,
  },
  'extends': [
    'eslint:recommended',
    'google',
    'react-app',
  ],
  'parserOptions': {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  'plugins': ['react'],
  'rules': {
    'indent': [0, 2, { SwitchCase: 1 }],
    'require-jsdoc': 'off',
    'react/prop-types': 'off',
    'object-curly-spacing': [2, 'always'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
          '//': 'before',
        },
      },
    ],
  },
};
