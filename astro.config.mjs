// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      cssMinify: 'lightningcss',
      assetsInlineLimit: 0
    },
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        drafts: {
          customMedia: true
        }
      }
    }
  },
  scopedStyleStrategy: 'where',
  build: {
    inlineStylesheets: 'never'
  }
});
