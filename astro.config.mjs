// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  },
  scopedStyleStrategy: 'where',
  build: {
    inlineStylesheets: 'never'
  }
})
