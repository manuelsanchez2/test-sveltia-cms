import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Plugin } from 'vite';

/**
 * Serve static/admin/index.html at /admin and /admin/ during `vite dev`.
 * Vite's dev server doesn't resolve directory indexes, so those paths would
 * otherwise 404 — while Netlify and `vite preview` map them automatically.
 * This makes the CMS reachable at /admin locally, matching production.
 */
const adminIndexFallback = (): Plugin => ({
	name: 'admin-index-fallback',
	enforce: 'pre',
	configureServer(server) {
		// Run before SvelteKit's dev middleware so the rewrite happens first.
		server.middlewares.use((req, _res, next) => {
			const r = req as { url?: string };
			const path = (r.url ?? '').split('?')[0];
			if (path === '/admin' || path === '/admin/') {
				r.url = '/admin/index.html';
			}
			next();
		});
	}
});

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), adminIndexFallback()]
});
