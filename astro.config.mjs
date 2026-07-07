import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://dominik-prilmueller.at',
  vite: {
    plugins: [tailwindcss()],
  },
})
