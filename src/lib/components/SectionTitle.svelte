<script lang="ts">
	import { reveal } from '$lib/reveal';

	type Props = {
		eyebrow?: string;
		titel: string;
		/** Center the block (used for full-width CTA sections). */
		center?: boolean;
		/** Render as h1 instead of the default h2 (once per page). */
		as?: 'h1' | 'h2';
	};

	let { eyebrow = '', titel, center = false, as = 'h2' }: Props = $props();
</script>

<div class="section-title" class:center use:reveal>
	{#if eyebrow}
		<p class="eyebrow">{eyebrow}</p>
	{/if}
	{#if as === 'h1'}
		<h1>{titel}</h1>
	{:else}
		<h2>{titel}</h2>
	{/if}
	<!-- "Wasserlinie": the single decorative gesture — a hairline mark of level. -->
	<span class="waterline" aria-hidden="true"></span>
</div>

<style>
	.section-title {
		max-width: 44rem;
	}
	.section-title.center {
		margin-inline: auto;
		text-align: center;
	}

	.eyebrow {
		font-family: var(--font-body);
		text-transform: uppercase;
		letter-spacing: 0.18em;
		font-size: 0.72rem;
		font-weight: 600;
		color: var(--color-petrol);
		margin-bottom: 0.75rem;
	}

	h1 {
		font-size: clamp(2.2rem, 5vw, 3.5rem);
		line-height: 1.1;
	}
	h2 {
		font-size: clamp(1.7rem, 3.5vw, 2.4rem);
		line-height: 1.15;
	}

	.waterline {
		display: block;
		width: 3.5rem;
		height: 2px;
		margin-top: 1.1rem;
		margin-left: 0.15rem;
		background-color: var(--color-petrol);
	}
	.center .waterline {
		margin-inline: auto;
	}
</style>
