import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), compress()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  }
})
