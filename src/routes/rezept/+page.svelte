<script lang="ts">
	import { general } from '$lib/content';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { reveal } from '$lib/reveal';

	// Statische Website ohne Server: Dieses Formular ist eine Demonstration.
	// Es werden keine Daten übertragen oder gespeichert – die Bestätigung erfolgt
	// rein im Browser. Für den Echtbetrieb muss ein datenschutzkonformes Backend
	// (z. B. Formular-Dienst oder Praxissoftware) angebunden werden.
	let nachname = $state('');
	let vorname = $state('');
	let geburtsdatum = $state('');
	let telefon = $state('');
	let email = $state('');
	let medikamente = $state('');
	let einwilligung = $state(false);
	let abgeschickt = $state(false);

	function absenden(event: SubmitEvent) {
		event.preventDefault();
		abgeschickt = true;
	}
</script>

<Seo
	title="Rezeptbestellung online"
	path="/rezept"
	description="Bestellen Sie Ihr Folgerezept bequem online – wir stellen es für Sie zur Abholung bereit."
/>

<section class="section">
	<div class="container">
		<SectionTitle eyebrow="Service" titel="Rezeptbestellung online" as="h1" />
		<p class="intro" use:reveal>
			Benötigen Sie ein Folgerezept für ein Dauermedikament? Senden Sie uns Ihre Angaben
			bequem online. Wir stellen das Rezept in der Regel innerhalb von zwei Werktagen zur
			Abholung an der Anmeldung bereit.
		</p>

		{#if abgeschickt}
			<div class="danke" role="status" use:reveal>
				<h2>Vielen Dank, {vorname}!</h2>
				<p>
					Ihre Rezeptbestellung ist bei uns eingegangen. Sie können das Rezept in der Regel
					nach zwei Werktagen zu den Sprechzeiten abholen. Bei Rückfragen erreichen Sie uns
					unter <a href={`tel:${general.telefon.replace(/\s/g, '')}`}>{general.telefon}</a>.
				</p>
				<button class="btn ghost" type="button" onclick={() => (abgeschickt = false)}>
					Weitere Bestellung aufgeben
				</button>
			</div>
		{:else}
			<form class="formular" onsubmit={absenden} use:reveal>
				<div class="row">
					<div class="feld">
						<label for="vorname">Vorname</label>
						<input id="vorname" name="vorname" type="text" bind:value={vorname} required />
					</div>
					<div class="feld">
						<label for="nachname">Nachname</label>
						<input id="nachname" name="nachname" type="text" bind:value={nachname} required />
					</div>
				</div>

				<div class="row">
					<div class="feld">
						<label for="geburtsdatum">Geburtsdatum</label>
						<input
							id="geburtsdatum"
							name="geburtsdatum"
							type="date"
							bind:value={geburtsdatum}
							required
						/>
					</div>
					<div class="feld">
						<label for="telefon">Telefon</label>
						<input id="telefon" name="telefon" type="tel" bind:value={telefon} required />
					</div>
				</div>

				<div class="feld">
					<label for="email">E-Mail</label>
					<input id="email" name="email" type="email" bind:value={email} required />
				</div>

				<div class="feld">
					<label for="medikamente">Benötigte Medikamente</label>
					<textarea
						id="medikamente"
						name="medikamente"
						rows="4"
						placeholder="Name, Stärke und Menge der benötigten Medikamente"
						bind:value={medikamente}
						required
					></textarea>
				</div>

				<label class="einwilligung">
					<input type="checkbox" bind:checked={einwilligung} required />
					<span>
						Ich willige ein, dass meine Angaben zur Bearbeitung der Rezeptbestellung
						verarbeitet werden. Hinweise finden Sie in der
						<a href="/datenschutz">Datenschutzerklärung</a>.
					</span>
				</label>

				<p class="demo-hinweis">
					Hinweis: Dies ist ein Demoformular. Es werden derzeit keine Daten übertragen oder
					gespeichert.
				</p>

				<button class="btn" type="submit">Rezept bestellen</button>
			</form>
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
	.formular {
		max-width: 40rem;
		margin-top: 2.5rem;
		display: grid;
		gap: 1.25rem;
	}
	.row {
		display: grid;
		gap: 1.25rem;
		grid-template-columns: 1fr;
	}
	@media (min-width: 600px) {
		.row {
			grid-template-columns: 1fr 1fr;
		}
	}
	.feld {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	label {
		font-size: 0.95rem;
		color: color-mix(in srgb, var(--color-ink) 80%, transparent);
	}
	input,
	textarea {
		font: inherit;
		color: var(--color-ink);
		background-color: var(--color-paper);
		border: 1px solid var(--color-line);
		padding: 0.65rem 0.85rem;
		border-radius: 2px;
	}
	input:focus-visible,
	textarea:focus-visible {
		border-color: var(--color-petrol);
	}
	textarea {
		resize: vertical;
	}
	.einwilligung {
		display: flex;
		gap: 0.65rem;
		align-items: flex-start;
		font-size: 0.9rem;
		line-height: 1.6;
	}
	.einwilligung input {
		margin-top: 0.2rem;
		width: auto;
	}
	.einwilligung a,
	.danke a {
		color: var(--color-petrol);
		text-decoration: underline;
		text-underline-offset: 2px;
	}
	.demo-hinweis {
		font-size: 0.85rem;
		color: color-mix(in srgb, var(--color-ink) 60%, transparent);
	}
	.btn {
		justify-self: start;
		display: inline-flex;
		background-color: var(--color-petrol);
		color: var(--color-paper);
		padding: 0.7rem 1.5rem;
		font-weight: 600;
		border: none;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}
	.btn:hover {
		background-color: var(--color-petrol-deep);
	}
	.btn.ghost {
		background-color: transparent;
		color: var(--color-petrol);
		border: 1px solid var(--color-petrol);
		margin-top: 1.5rem;
	}
	.btn.ghost:hover {
		background-color: var(--color-mist);
	}
	.danke {
		max-width: 40rem;
		margin-top: 2.5rem;
		padding: 2rem;
		background-color: var(--color-mist);
		border: 1px solid var(--color-line);
	}
	.danke h2 {
		font-size: 1.5rem;
		margin-bottom: 0.75rem;
	}
	.danke p {
		line-height: 1.7;
	}
</style>
