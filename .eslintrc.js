module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'google',
    'react-app',
    'react-app/jest',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'operator-linebreak': ['error', 'before'],
    'indent': [4, 4, { 'SwitchCase': 1 }],
    'require-jsdoc': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'object-curly-spacing': [2, 'always'],
    'destructuring': 'all',
    'space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'}],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'operator-linebreak': [
      'error',
      'after',
      {
        'overrides': {
          '?': 'before',
          ':': 'before'
        }
      }
    ]
  },
};
