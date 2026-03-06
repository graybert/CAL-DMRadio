// @ts-check
import { defineConfig } from 'astro/config';

// Change `base` to '/' if deploying to a custom domain.
// With this config, local dev runs at: http://localhost:4321/CAL-DMRadio/
export default defineConfig({
  site: 'https://graybert.github.io/CAL-DMRadio',
  base: '/CAL-DMRadio',
  output: 'static',
});
