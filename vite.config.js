/* eslint-disable */
const { defineConfig } = require('vite')
const { eslintPlugin } = require('vite-plugin-eslint');

module.exports = defineConfig({
  server: {
    port: 3500,
  },
  plugins: [eslintPlugin()],
})
