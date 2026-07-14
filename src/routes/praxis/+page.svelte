<script lang="ts">
	import { praxis } from '$lib/content';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { reveal } from '$lib/reveal';
</script>

<Seo title="Die Praxis" path="/praxis" description={praxis.einleitung} />

<section class="section">
	<div class="container">
		<SectionTitle eyebrow={praxis.eyebrow} titel={praxis.titel} as="h1" />
		<p class="intro" use:reveal>{praxis.einleitung}</p>
	</div>
</section>

{#each praxis.abschnitte as abschnitt, i}
	<section class="section" class:section--mist={i % 2 === 1}>
		<div class="container split" class:reverse={i % 2 === 1}>
			<div class="text" use:reveal>
				<h2>{abschnitt.titel}</h2>
				<span class="waterline" aria-hidden="true"></span>
				<p>{abschnitt.text}</p>
			</div>
			<div class="media" use:reveal={120}>
				{#if abschnitt.bild}
					<img src={abschnitt.bild} alt={abschnitt.titel} loading="lazy" />
				{:else}
					<div class="placeholder" aria-hidden="true"></div>
				{/if}
			</div>
		</div>
	</section>
{/each}

<style>
	.intro {
		max-width: 44rem;
		margin-top: 2rem;
		font-size: 1.1rem;
		color: color-mix(in srgb, var(--color-ink) 85%, transparent);
	}
	.split {
		display: grid;
		gap: 3rem;
		grid-template-columns: 1fr;
		align-items: center;
	}
	@media (min-width: 860px) {
		.split {
			grid-template-columns: 1fr 1fr;
		}
		.split.reverse .text {
			order: 2;
		}
	}
	.text h2 {
		font-size: clamp(1.6rem, 3vw, 2.1rem);
	}
	.waterline {
		display: block;
		width: 3.5rem;
		height: 2px;
		margin: 1rem 0 1.5rem;
		background-color: var(--color-petrol);
	}
	.text p {
		font-size: 1.05rem;
		color: color-mix(in srgb, var(--color-ink) 85%, transparent);
	}
	.media img {
		width: 100%;
		height: auto;
		display: block;
	}
	.placeholder {
		aspect-ratio: 4 / 3;
		background-color: var(--color-mist);
		border: 1px solid var(--color-line);
	}
	.section--mist .placeholder {
		background-color: var(--color-paper);
	}
</style>
