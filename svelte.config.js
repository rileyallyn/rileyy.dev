import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import seqPreprocessor from 'svelte-sequential-preprocessor'
import { preprocessThrelte } from '@threlte/preprocess'
import {mdsvex} from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: seqPreprocessor([
		preprocess({ postcss: true }), 
		mdsvex({ 
			extensions: ['.md'], 
	}), 
		preprocessThrelte()
	]),

	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter(),
		alias: {
			'components': './src/components/',

		}
	}
};

export default config;
