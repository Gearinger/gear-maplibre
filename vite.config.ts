import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({})],
  base: './',

  // 端口改为9000
  server: {
    port: 9000
  }
})
