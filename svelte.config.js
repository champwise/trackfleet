//import adapter from '@sveltejs/adapter-auto';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from "svelte-preprocess";
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
		postcss: true,
		})

	],
	kit: {
		adapter: adapterNode(),
		alias: {
			$components: path.resolve('./src/lib/components'),
			$layout: path.resolve('./src/lib/components/layout'),
			$layouts: path.resolve('./src/lib/layouts'),
			$utils: path.resolve('./src/lib/utils'),
			$styles: path.resolve('./src/lib/styles'),
			$stores: path.resolve('./src/lib/stores')
		}
	}
};

export default config;
