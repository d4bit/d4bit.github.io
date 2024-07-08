import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

    const LIVE_URL = 'https://d4bit.github.io';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    site: LIVE_URL,
});
