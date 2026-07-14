import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		prerender: {
			// Media under /uploads is managed through Sveltia CMS and may not exist
			// at build time (e.g. the default OG image before the client uploads one).
			// Don't fail the build over missing user media; fail on everything else.
			handleHttpError: ({ path, message }) => {
				if (path.startsWith('/uploads/')) {
					console.warn(`Warnung: fehlende Mediendatei ${path} (wird über das CMS gepflegt)`);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
