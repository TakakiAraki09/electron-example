import { resolve } from 'path'
import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import pandacss from "@pandacss/dev/postcss"

export default defineConfig({
  main: {
    // MEMO: Aliasが必要になりそうであったらコメントを外す
    // plugins: [
    //   tsconfigPaths()
    // ]
  },
  preload: {
    // MEMO: Aliasが必要になりそうであったらコメントを外す
    // plugins: [
    //   tsconfigPaths()
    // ]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },

    css: {
      postcss: {
        plugins: [pandacss()],
      },
    },

    plugins: [react(), tsconfigPaths()]
  }
})
