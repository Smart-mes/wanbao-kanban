/* eslint-disable import/no-extraneous-dependencies */
import path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import dynamicImport from 'vite-plugin-dynamic-import'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://8.129.76.46:8022/',
  //     },
  //   },
  // },

  plugins: [
    createVuePlugin(),
    dynamicImport(),
  ],
})
