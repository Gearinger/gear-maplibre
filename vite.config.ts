import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({})],
  base: './',

  build: {
    rolldownOptions: {
      output: {
        assetFileNames: (asset) => {
          const sourceName = asset.names[0] ?? "";
          return sourceName.endsWith(".mjs")
            ? "assets/[name]-[hash].js"
            : "assets/[name]-[hash][extname]";
        },
      },
    },
  },

  // 端口改为9000
  server: {
    port: 9000
  }
})
