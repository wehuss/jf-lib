import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import dts from 'vite-plugin-dts'
import vueJsx from '@vitejs/plugin-vue-jsx'
console.log('vueJsx',vueJsx);
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'jf-lib',
      fileName: (format) => `jf-lib.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue','@arco-design/web-vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      },
      // resolve:{
      //   dedupe: ['vue']
      // }
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
      {
        find: 'assets',
        replacement: path.resolve(__dirname, './src/assets'),
      },
      // {
      //   find: 'vue',
      //   replacement: 'vue/dist/vue.esm-bundler.js', // compile template. you can remove it, if you don't need.
      // },
    ],
    extensions: ['.ts', '.tsx', '.js', '.d.ts'],
  },
})
