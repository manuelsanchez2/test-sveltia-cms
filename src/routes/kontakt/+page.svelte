<script lang="ts">
	import { kontakt, general } from '$lib/content';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import Sprechzeiten from '$lib/components/Sprechzeiten.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { reveal } from '$lib/reveal';
</script>

<Seo title="Kontakt & Anfahrt" path="/kontakt" description={kontakt.einleitung} />

<section class="section">
	<div class="container">
		<SectionTitle eyebrow={kontakt.eyebrow} titel={kontakt.titel} as="h1" />
		<p class="intro" use:reveal>{kontakt.einleitung}</p>

		<div class="grid">
			<div class="block" use:reveal>
				<h2>Kontakt</h2>
				<address>
					<strong>{general.praxisName}</strong><br />
					{general.adresse.strasse}<br />
					{general.adresse.plz} {general.adresse.stadt}
				</address>
				<dl class="lines">
					<div>
						<dt>Telefon</dt>
						<dd><a href={`tel:${general.telefon.replace(/\s/g, '')}`}>{general.telefon}</a></dd>
					</div>
					{#if general.fax}
						<div>
							<dt>Fax</dt>
							<dd>{general.fax}</dd>
						</div>
					{/if}
					<div>
						<dt>E-Mail</dt>
						<dd><a href={`mailto:${general.email}`}>{general.email}</a></dd>
					</div>
				</dl>
				{#if general.terminLink}
					<a class="btn" href={general.terminLink} target="_blank" rel="noopener">
						Termin vereinbaren
					</a>
				{/if}
			</div>

			<div class="block" use:reveal={120}>
				<h2>Sprechzeiten</h2>
				<Sprechzeiten sprechzeiten={general.sprechzeiten} />
				<p class="notdienst">{general.notdienstHinweis}</p>
			</div>
		</div>
	</div>
</section>

<section class="section section--mist">
	<div class="container">
		<SectionTitle titel={kontakt.anfahrt.titel} />
		<div class="anfahrt">
			<div class="way" use:reveal>
				<h3>Mit der U-Bahn</h3>
				<p>{kontakt.anfahrt.mitUBahn}</p>
			</div>
			<div class="way" use:reveal={80}>
				<h3>Mit dem Bus</h3>
				<p>{kontakt.anfahrt.mitBus}</p>
			</div>
			<div class="way" use:reveal={160}>
				<h3>Mit dem Auto</h3>
				<p>{kontakt.anfahrt.mitAuto}</p>
			</div>
		</div>
		{#if kontakt.anfahrt.hinweis}
			<p class="hinweis" use:reveal>{kontakt.anfahrt.hinweis}</p>
		{/if}

		{#if kontakt.karteEmbed}
			<div class="karte" use:reveal>
				{@html kontakt.karteEmbed}
			</div>
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
	.grid {
		display: grid;
		gap: 3rem;
		grid-template-columns: 1fr;
		margin-top: 3rem;
	}
	@media (min-width: 800px) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}
	.block h2 {
		font-size: 1.5rem;
		margin-bottom: 1.25rem;
	}
	address {
		font-style: normal;
		line-height: 1.7;
		margin-bottom: 1.5rem;
	}
	.lines div {
		display: flex;
		gap: 1rem;
		padding: 0.5rem 0;
		border-bottom: 1px solid var(--color-line);
	}
	.lines dt {
		width: 6rem;
		flex-shrink: 0;
		color: color-mix(in srgb, var(--color-ink) 70%, transparent);
	}
	.lines a {
		color: var(--color-petrol);
		font-weight: 600;
	}
	.btn {
		display: inline-flex;
		margin-top: 1.75rem;
		background-color: var(--color-petrol);
		color: var(--color-paper);
		padding: 0.7rem 1.5rem;
		font-weight: 600;
		transition: background-color 0.2s ease;
	}
	.btn:hover {
		background-color: var(--color-petrol-deep);
	}
	.notdienst {
		margin-top: 1.5rem;
		font-size: 0.92rem;
		color: color-mix(in srgb, var(--color-ink) 78%, transparent);
		line-height: 1.7;
	}

	.anfahrt {
		display: grid;
		gap: 2rem;
		grid-template-columns: 1fr;
		margin-top: 2.5rem;
	}
	@media (min-width: 720px) {
		.anfahrt {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	.way h3 {
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
	}
	.way p {
		font-size: 0.98rem;
		color: color-mix(in srgb, var(--color-ink) 82%, transparent);
	}
	.hinweis {
		margin-top: 2rem;
		font-size: 0.95rem;
		color: var(--color-petrol);
	}
	.karte {
		margin-top: 2.5rem;
	}
	.karte :global(iframe) {
		width: 100%;
		border: 1px solid var(--color-line);
		aspect-ratio: 16 / 9;
	}
</style>
