import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
  extensions: [ '.svelte', '.md' ],
  paths: {
    base: ''
  },
  preprocess: [
    sveltePreprocess(),
    mdsvex({
      extensions: ['.md'],
    })
  ]
};

export default config;
