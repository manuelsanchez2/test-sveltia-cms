<script lang="ts">
	import type { General, Social } from '$lib/content';
	import Sprechzeiten from './Sprechzeiten.svelte';
	import SocialIcons from './SocialIcons.svelte';

	let { general, social }: { general: General; social: Social } = $props();

	const jahr = 2026;
</script>

<footer>
	<div class="inner">
		<div class="col">
			<p class="name">{general.praxisName}</p>
			<address>
				{general.adresse.strasse}<br />
				{general.adresse.plz}
				{general.adresse.stadt}
			</address>
			<p class="contact">
				<a href={`tel:${general.telefon.replace(/\s/g, '')}`}>{general.telefon}</a><br />
				<a href={`mailto:${general.email}`}>{general.email}</a>
			</p>
			<SocialIcons {social} />
		</div>

		<div class="col">
			<p class="heading">Sprechzeiten</p>
			<Sprechzeiten sprechzeiten={general.sprechzeiten} compact />
		</div>

		<div class="col">
			<p class="heading">Notfall</p>
			<p class="notdienst">{general.notdienstHinweis}</p>
		</div>
	</div>

	<div class="sub">
		<p>© {jahr} {general.praxisName}</p>
		<nav aria-label="Rechtliches">
			<a href="/impressum">Impressum</a>
			<a href="/datenschutz">Datenschutz</a>
		</nav>
	</div>
</footer>

<style>
	footer {
		background-color: var(--color-petrol-deep);
		color: color-mix(in srgb, white 88%, var(--color-petrol-deep));
		margin-top: 6rem;
	}
	.inner {
		max-width: 1100px;
		margin-inline: auto;
		padding: 4rem 1.5rem 2.5rem;
		display: grid;
		gap: 2.5rem;
		grid-template-columns: 1fr;
	}
	@media (min-width: 720px) {
		.inner {
			grid-template-columns: 1.2fr 1fr 1fr;
		}
	}

	.name {
		font-family: var(--font-display);
		font-size: 1.15rem;
		color: white;
		margin-bottom: 0.75rem;
	}
	.heading {
		text-transform: uppercase;
		letter-spacing: 0.16em;
		font-size: 0.72rem;
		font-weight: 600;
		color: color-mix(in srgb, white 70%, var(--color-petrol));
		margin-bottom: 1rem;
	}
	address {
		font-style: normal;
		margin-bottom: 1rem;
		line-height: 1.7;
	}
	.contact {
		margin-bottom: 1.25rem;
		line-height: 1.8;
	}
	.notdienst {
		font-size: 0.92rem;
		line-height: 1.7;
	}
	a {
		color: inherit;
		text-decoration: none;
		transition: color 0.2s ease;
	}
	.contact a:hover,
	.sub a:hover {
		color: white;
	}

	/* Footer Sprechzeiten inherit lighter borders/colors on dark bg. */
	.inner :global(.sprechzeiten .row) {
		border-color: color-mix(in srgb, white 18%, transparent);
	}
	.inner :global(.sprechzeiten dt),
	.inner :global(.sprechzeiten dd) {
		color: color-mix(in srgb, white 88%, var(--color-petrol-deep));
	}
	.inner :global(.sprechzeiten .hinweis) {
		color: color-mix(in srgb, white 65%, var(--color-petrol));
	}
	.inner :global(.social a) {
		color: color-mix(in srgb, white 82%, var(--color-petrol-deep));
	}
	.inner :global(.social a:hover) {
		color: white;
	}

	.sub {
		max-width: 1100px;
		margin-inline: auto;
		padding: 1.5rem;
		border-top: 1px solid color-mix(in srgb, white 15%, transparent);
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: space-between;
		font-size: 0.88rem;
	}
	.sub nav {
		display: flex;
		gap: 1.5rem;
	}
	.sub a {
		text-decoration: underline;
		text-underline-offset: 2px;
	}
</style>
