<script lang="ts">
	import { reveal } from '$lib/reveal';

	type Props = {
		name: string;
		rolle: string;
		qualifikationen: string;
		foto?: string;
	};

	let { name, rolle, qualifikationen, foto = '' }: Props = $props();
</script>

<article class="card" use:reveal>
	<div class="portrait">
		{#if foto}
			<img src={foto} alt={`Porträtfoto von ${name}`} loading="lazy" />
		{:else}
			<span class="placeholder" aria-hidden="true">
				{name.split(' ').filter(Boolean).slice(-2).map((w) => w[0]).join('')}
			</span>
		{/if}
	</div>
	<h3>{name}</h3>
	<p class="rolle">{rolle}</p>
	{#if qualifikationen}
		<p class="quali">{qualifikationen}</p>
	{/if}
</article>

<style>
	.card {
		background-color: var(--color-paper);
		border: 1px solid var(--color-line);
		padding: 1.75rem;
	}
	.portrait {
		aspect-ratio: 4 / 5;
		background-color: var(--color-mist);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1.25rem;
		overflow: hidden;
	}
	.portrait img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.placeholder {
		font-family: var(--font-display);
		font-size: 2.5rem;
		color: var(--color-petrol);
		letter-spacing: 0.05em;
	}
	h3 {
		font-size: 1.25rem;
		margin-bottom: 0.25rem;
	}
	.rolle {
		color: var(--color-petrol);
		font-weight: 600;
		font-size: 0.95rem;
		margin-bottom: 0.75rem;
	}
	.quali {
		font-size: 0.92rem;
		color: color-mix(in srgb, var(--color-ink) 80%, transparent);
	}
</style>
