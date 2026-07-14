import type { RequestHandler } from './$types';

export const prerender = true;

const base = 'https://www.dr-bergmann-hamburg.de';
const routes = ['/', '/leistungen', '/praxis', '/team', '/kontakt', '/impressum', '/datenschutz'];

export const GET: RequestHandler = () => {
	const urls = routes
		.map((r) => `\t<url><loc>${base}${r}</loc></url>`)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
