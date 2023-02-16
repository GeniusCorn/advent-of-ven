/// <reference types="vitest" />

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/ // .vue
      ],

      imports: ['vue', 'vue-router', 'vue/macros', 'vitest'],

      dirs: [],

      dts: './auto-imports.d.ts',

      vueTemplate: true,

      resolvers: [],

      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    Components({
      dts: true
    }),
    Pages(),
    Layouts(),
    // see unocss.config.ts for config
    Unocss()
  ],
  test: {
    globals: true,
    coverage: {
      provider: 'istanbul'
    },
    environment: 'happy-dom'
  }
})
