/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        '@vue/airbnb',
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    settings: {
        'import/resolver': {
            alias: {
                extensions: ['.ts', '.js', '.tsx', '.json', '.vue', '.css'],
                map: [
                    ['~', './src'],
                ],
            },
        },
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['error', 4],
        'vue/html-indent': 'off',
        'max-len': ['warn', 200],
        'vue/max-len': ['warn', 200],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
};
