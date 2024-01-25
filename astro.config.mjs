import { defineConfig } from 'astro/config'
import compressor from 'astro-compressor'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), compressor()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  }
})
