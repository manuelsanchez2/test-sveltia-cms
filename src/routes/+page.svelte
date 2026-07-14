<script lang="ts">
	import { startseite, general } from '$lib/content';
	import Hero from '$lib/components/Hero.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { reveal } from '$lib/reveal';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'MedicalClinic',
		name: general.praxisName,
		description: general.claim,
		telephone: general.telefon,
		email: general.email,
		address: {
			'@type': 'PostalAddress',
			streetAddress: general.adresse.strasse,
			postalCode: general.adresse.plz,
			addressLocality: general.adresse.stadt,
			addressCountry: 'DE'
		},
		medicalSpecialty: 'PrimaryCare'
	};
</script>

<Seo path="/" {jsonLd} />

<div class="container">
	<Hero hero={startseite.hero} {general} />
</div>

<section class="section section--mist">
	<div class="container">
		<SectionTitle
			eyebrow={startseite.leistungenTeaser.eyebrow}
			titel={startseite.leistungenTeaser.titel}
		/>
		<p class="intro" use:reveal>{startseite.leistungenTeaser.text}</p>
		<div class="grid">
			{#each startseite.leistungenTeaser.highlights as h}
				<article class="highlight" use:reveal>
					<h3>{h.titel}</h3>
					<p>{h.text}</p>
				</article>
			{/each}
		</div>
		<p class="more" use:reveal>
			<a href="/leistungen">Alle Leistungen ansehen →</a>
		</p>
	</div>
</section>

<section class="section">
	<div class="container">
		<figure class="zitat" use:reveal>
			<blockquote>„{startseite.zitat.text}“</blockquote>
			<figcaption>— {startseite.zitat.quelle}</figcaption>
		</figure>
	</div>
</section>

<section class="section section--mist">
	<div class="container cta" use:reveal>
		<SectionTitle titel={startseite.ctaAbschnitt.titel} center />
		<p class="intro center">{startseite.ctaAbschnitt.text}</p>
		{#if general.terminLink}
			<a class="btn" href={general.terminLink} target="_blank" rel="noopener">
				{startseite.ctaAbschnitt.ctaText}
			</a>
		{/if}
	</div>
</section>

<style>
	.intro {
		max-width: 44rem;
		margin-top: 2rem;
		font-size: 1.1rem;
		color: color-mix(in srgb, var(--color-ink) 85%, transparent);
	}
	.intro.center {
		margin-inline: auto;
		text-align: center;
	}
	.grid {
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 1fr;
		margin-top: 3rem;
	}
	@media (min-width: 720px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	.highlight {
		border-top: 2px solid var(--color-petrol);
		padding-top: 1.25rem;
	}
	.highlight h3 {
		font-size: 1.15rem;
		margin-bottom: 0.5rem;
	}
	.highlight p {
		font-size: 0.98rem;
		color: color-mix(in srgb, var(--color-ink) 82%, transparent);
	}
	.more {
		margin-top: 2.5rem;
	}
	.more a {
		color: var(--color-petrol);
		font-weight: 600;
	}

	.zitat {
		max-width: 48rem;
		margin-inline: auto;
		text-align: center;
	}
	blockquote {
		font-family: var(--font-display);
		font-size: clamp(1.5rem, 3.5vw, 2.1rem);
		line-height: 1.4;
		color: var(--color-ink);
	}
	figcaption {
		margin-top: 1.5rem;
		color: var(--color-petrol);
		font-weight: 600;
	}

	.cta {
		text-align: center;
	}
	.btn {
		display: inline-flex;
		margin-top: 2rem;
		background-color: var(--color-petrol);
		color: var(--color-paper);
		padding: 0.75rem 1.75rem;
		font-weight: 600;
		transition: background-color 0.2s ease;
	}
	.btn:hover {
		background-color: var(--color-petrol-deep);
	}
</style>
