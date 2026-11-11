import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({})],
  base: './',

  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "vendor-ant-design",
              test: /node_modules\/(?:ant-design-vue|@ant-design|@ctrl|dayjs|async-validator|rc-)/,
            },
            {
              name: "vendor-maplibre",
              test: /node_modules\/(?:maplibre-gl|@maplibre|@mapbox)/,
            },
            {
              name: "vendor-vue",
              test: /node_modules\/(?:vue|@vue|vue-router|vue-codemirror)/,
            },
          ],
        },
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
