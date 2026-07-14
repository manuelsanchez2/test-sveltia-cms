<script lang="ts">
	import { reveal } from '$lib/reveal';

	let { titel, beschreibung }: { titel: string; beschreibung: string } = $props();
</script>

<article class="card" use:reveal>
	<h3>{titel}</h3>
	<p>{beschreibung}</p>
</article>

<style>
	.card {
		background-color: var(--color-paper);
		border: 1px solid var(--color-line);
		padding: 1.75rem;
		height: 100%;
		transition: border-color 0.2s ease;
	}
	.card:hover {
		border-color: var(--color-petrol);
	}
	h3 {
		font-size: 1.2rem;
		margin-bottom: 0.6rem;
	}
	p {
		color: color-mix(in srgb, var(--color-ink) 82%, transparent);
		font-size: 0.98rem;
	}
</style>
