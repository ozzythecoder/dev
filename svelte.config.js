import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
  paths: {
    base: '/ozzythecoder.github.io'
  },
	preprocess: [sveltePreprocess()]
};

export default config;
