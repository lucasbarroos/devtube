module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0,
    "react-hooks/exhaustive-deps": 0,
    "react/prop-types": 0,
    "class-methods-use-this": 0,
    "import/no-named-as-default-member": 0,
    "import/no-named-as-default": 0
  },
};
