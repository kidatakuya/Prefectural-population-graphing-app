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
        'indent': ['error', 4],
        'require-jsdoc': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'object-curly-spacing': [4, 'always'],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
};
