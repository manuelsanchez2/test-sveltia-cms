<script lang="ts">
	import { general } from '$lib/content';

	type Props = {
		/** Page-specific title; combined with the global suffix. */
		title?: string;
		description?: string;
		/** Path of the current page, e.g. "/leistungen". */
		path?: string;
		/** Optional JSON-LD object injected into <head>. */
		jsonLd?: Record<string, unknown>;
	};

	let { title = '', description = '', path = '/', jsonLd }: Props = $props();

	const suffix = general.seo.titleSuffix;
	const fullTitle = $derived(title ? `${title} · ${suffix}` : suffix);
	const desc = $derived(description || general.seo.description);
	const canonical = $derived(`https://www.dr-bergmann-hamburg.de${path}`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={desc} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={desc} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={general.seo.ogImage} />
	<meta property="og:locale" content="de_DE" />
	<meta name="twitter:card" content="summary_large_image" />

	{#if jsonLd}
		{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`}
	{/if}
</svelte:head>
