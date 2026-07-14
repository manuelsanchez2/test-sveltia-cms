import { general, social } from '$lib/content';

// Fully static site — every route is prerendered at build time.
export const prerender = true;
export const trailingSlash = 'never';

export const load = () => ({ general, social });
