import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Plugin } from 'vite';

// Absolute path to this project's root (the directory holding this config).
const projectRoot = fileURLToPath(new URL('.', import.meta.url));

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
	plugins: [tailwindcss(), sveltekit(), adminIndexFallback()],
	server: {
		// Pin a project-specific port so this app never shares 5173 with a
		// sibling project — that collision leaves stale cross-project asset
		// requests (e.g. another app's @fontsource paths) hitting this server.
		port: 5175,
		strictPort: true,
		// `content/` sits beside `src/` and is imported by src/lib/content.ts.
		// Explicitly allow the project root so Vite's dev server serves those
		// JSON files. Without this, the presence of pnpm-workspace.yaml shifts
		// Vite's workspace-root detection so `/content/*.json` returns 403 in
		// dev — which breaks the content import, blocks hydration, and leaves
		// interactive elements (e.g. the mobile menu) dead.
		fs: { allow: [projectRoot] }
	}
});
