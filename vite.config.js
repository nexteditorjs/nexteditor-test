/* eslint-disable */
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

module.exports = defineConfig({
  server: {
    port: 3500,
  },
  plugins: [eslintPlugin()],
})
