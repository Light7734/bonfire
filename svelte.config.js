import { mdsvex } from 'mdsvex';
import { mdsvex_config } from './mdsvex.config.js';

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: { adapter: adapter() },

    extensions: ['.svelte', '.svx', '.md'],

    preprocess: [
        vitePreprocess(),
        mdsvex(mdsvex_config)
    ],
};

export default config;
