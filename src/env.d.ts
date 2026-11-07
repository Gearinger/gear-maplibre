/// <reference types="vite/client" />

import { Map } from 'maplibre-gl';

declare global {
  interface ImportMetaEnv {
    readonly VITE_MAP_STYLE_URL?: string
    readonly VITE_TIANDITU_TOKEN?: string
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

