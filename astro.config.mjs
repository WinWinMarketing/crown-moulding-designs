import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Design-chooser deliverable: a static site of 12 homepage design options for the
// client to flip through and pick one. Deployed to GitHub Pages (project site) at
// https://winwinmarketing.github.io/crown-moulding-designs/ so the base is a subpath.
// Internal links read import.meta.env.BASE_URL so they resolve under that subpath.
export default defineConfig({
  site: 'https://winwinmarketing.github.io',
  base: '/crown-moulding-designs',
  vite: {
    plugins: [tailwindcss()],
  },
});
