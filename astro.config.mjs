// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    image: {
      domains: ['res.cloudinary.com'],
    }
});

/*
  import { defineConfig } from 'astro/config'
  import sitemap from '@astrojs/sitemap'

  export default defineConfig({
    site: 'https://www.example.com', // 🔥 Required for absolute URLs
    integrations: [sitemap()],
  })
*/