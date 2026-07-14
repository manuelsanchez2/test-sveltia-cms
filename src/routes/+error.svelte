<script lang="ts">
	import { page } from '$app/state';

	const status = $derived(page.status);
	const istNichtGefunden = $derived(status === 404);

	const titel = $derived(istNichtGefunden ? 'Seite nicht gefunden' : 'Etwas ist schiefgelaufen');
	const text = $derived(
		istNichtGefunden
			? 'Die aufgerufene Seite existiert leider nicht – vielleicht wurde sie verschoben oder der Link ist veraltet.'
			: 'Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es später erneut oder rufen Sie uns an.'
	);

	const links = [
		{ href: '/', label: 'Startseite' },
		{ href: '/leistungen', label: 'Leistungen' },
		{ href: '/kontakt', label: 'Kontakt & Anfahrt' }
	];
</script>

<svelte:head>
	<title>{status} · {titel}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="section">
	<div class="container error">
		<p class="code" aria-hidden="true">{status}</p>
		<h1>{titel}</h1>
		<span class="waterline" aria-hidden="true"></span>
		<p class="lead">{text}</p>

		<nav class="links" aria-label="Weiterführende Seiten">
			{#each links as link}
				<a href={link.href}>{link.label}</a>
			{/each}
		</nav>
	</div>
</section>

<style>
	.error {
		max-width: 40rem;
		padding-block: clamp(2rem, 6vw, 5rem);
	}
	.code {
		font-family: var(--font-display);
		font-size: clamp(3.5rem, 12vw, 6rem);
		line-height: 1;
		color: var(--color-petrol);
		margin-bottom: 0.5rem;
	}
	h1 {
		font-size: clamp(1.8rem, 4vw, 2.6rem);
	}
	.waterline {
		display: block;
		width: 3.5rem;
		height: 2px;
		margin: 1.1rem 0 1.5rem;
		background-color: var(--color-petrol);
	}
	.lead {
		font-size: 1.1rem;
		color: color-mix(in srgb, var(--color-ink) 85%, transparent);
		margin-bottom: 2rem;
	}
	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem 1.75rem;
	}
	.links a {
		color: var(--color-petrol);
		font-weight: 600;
		position: relative;
	}
	.links a::after {
		content: '→';
		margin-left: 0.35rem;
		transition: transform 0.2s ease;
		display: inline-block;
	}
	.links a:hover::after {
		transform: translateX(3px);
	}
</style>
