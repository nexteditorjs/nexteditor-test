module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  plugins: ["cypress"],
  extends: [
    'eslint:recommended',
    "plugin:cypress/recommended",
    "prettier",
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
  "globals": {
    "window": true,
    "document": true,
    "cypress/globals": true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    sourceType: "module"
  },
  "env": {
      "es6": true
  }
}