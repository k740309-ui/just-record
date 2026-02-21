// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    keystatic(),
    mdx(),
    markdoc() // Required by Keystatic internal UI occasionally
  ],

  output: 'static',
  adapter: netlify(),
});