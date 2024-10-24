// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import alpinejs from '@astrojs/alpinejs';

import mdx from '@astrojs/mdx';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  adapter: netlify({
    edgeMiddleware: true
  }),

  integrations: [alpinejs(), mdx(), tailwind({
    applyBaseStyles: false,
    nesting: true
  })]
});
