<script lang="ts">
	import { leistungen } from '$lib/content';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import LeistungCard from '$lib/components/LeistungCard.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { reveal } from '$lib/reveal';
</script>

<Seo title="Leistungen" path="/leistungen" description={leistungen.einleitung} />

<section class="section">
	<div class="container">
		<SectionTitle eyebrow={leistungen.eyebrow} titel={leistungen.titel} as="h1" />
		<p class="intro" use:reveal>{leistungen.einleitung}</p>

		<div class="grid">
			{#each leistungen.leistungen as l}
				<LeistungCard titel={l.titel} beschreibung={l.beschreibung} />
			{/each}
		</div>
	</div>
</section>

<style>
	.intro {
		max-width: 44rem;
		margin-top: 2rem;
		font-size: 1.1rem;
		color: color-mix(in srgb, var(--color-ink) 85%, transparent);
	}
	.grid {
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 1fr;
		margin-top: 3rem;
	}
	@media (min-width: 640px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 980px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
