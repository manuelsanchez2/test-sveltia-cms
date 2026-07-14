<script lang="ts">
	import type { General } from '$lib/content';
	import Sprechzeiten from './Sprechzeiten.svelte';
	import { reveal } from '$lib/reveal';

	type Hero = {
		eyebrow: string;
		titel: string;
		untertitel: string;
		primaryCtaText: string;
		secondaryCtaText: string;
	};

	let { hero, general }: { hero: Hero; general: General } = $props();
</script>

<section class="hero">
	<div class="content" use:reveal>
		{#if hero.eyebrow}
			<p class="eyebrow">{hero.eyebrow}</p>
		{/if}
		<h1>{hero.titel}</h1>
		<p class="lead">{hero.untertitel}</p>
		<div class="ctas">
			{#if general.terminLink}
				<a class="btn primary" href={general.terminLink} target="_blank" rel="noopener">
					{hero.primaryCtaText}
				</a>
			{/if}
			<a class="btn ghost" href="/leistungen">{hero.secondaryCtaText}</a>
		</div>
	</div>

	<aside class="card" use:reveal={120} aria-label="Sprechzeiten">
		<p class="eyebrow">Sprechzeiten</p>
		<Sprechzeiten sprechzeiten={general.sprechzeiten} compact />
		<p class="tel">
			Termine unter
			<a href={`tel:${general.telefon.replace(/\s/g, '')}`}>{general.telefon}</a>
		</p>
	</aside>
</section>

<style>
	.hero {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		align-items: center;
		padding-block: clamp(3rem, 8vw, 6rem);
	}
	@media (min-width: 900px) {
		.hero {
			grid-template-columns: 1.4fr 1fr;
			gap: 4rem;
		}
	}

	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.18em;
		font-size: 0.72rem;
		font-weight: 600;
		color: var(--color-petrol);
		margin-bottom: 1rem;
	}
	h1 {
		font-size: clamp(2.2rem, 5vw, 3.5rem);
		line-height: 1.08;
		margin-bottom: 1.25rem;
	}
	.lead {
		font-size: 1.15rem;
		max-width: 34rem;
		color: color-mix(in srgb, var(--color-ink) 85%, transparent);
		margin-bottom: 2rem;
	}

	.ctas {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.btn {
		display: inline-flex;
		align-items: center;
		padding: 0.7rem 1.5rem;
		font-weight: 600;
		font-size: 0.98rem;
		border: 1px solid transparent;
		transition:
			background-color 0.2s ease,
			color 0.2s ease,
			border-color 0.2s ease;
	}
	.btn.primary {
		background-color: var(--color-petrol);
		color: var(--color-paper);
	}
	.btn.primary:hover {
		background-color: var(--color-petrol-deep);
	}
	.btn.ghost {
		border-color: var(--color-line);
		color: var(--color-ink);
	}
	.btn.ghost:hover {
		border-color: var(--color-petrol);
		color: var(--color-petrol);
	}

	.card {
		background-color: var(--color-mist);
		border: 1px solid var(--color-line);
		padding: 2rem;
	}
	.tel {
		margin-top: 1.25rem;
		font-size: 0.95rem;
	}
	.tel a {
		color: var(--color-petrol);
		font-weight: 600;
		white-space: nowrap;
	}
</style>
