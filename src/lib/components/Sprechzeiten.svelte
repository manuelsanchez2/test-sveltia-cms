<script lang="ts">
	import type { Sprechzeit } from '$lib/content';

	type Props = {
		sprechzeiten: Sprechzeit[];
		/** Compact card variant used in the hero. */
		compact?: boolean;
	};

	let { sprechzeiten, compact = false }: Props = $props();
</script>

<dl class="sprechzeiten" class:compact>
	{#each sprechzeiten as zeit}
		<div class="row">
			<dt>{zeit.tage}</dt>
			<dd>
				{#if zeit.von && zeit.bis}
					{zeit.von}–{zeit.bis} Uhr
				{/if}
				{#if zeit.hinweis}
					<span class="hinweis">{zeit.hinweis}</span>
				{/if}
			</dd>
		</div>
	{/each}
</dl>

<style>
	.sprechzeiten {
		display: flex;
		flex-direction: column;
	}
	.row {
		display: flex;
		justify-content: space-between;
		gap: 1.5rem;
		padding: 0.6rem 0;
		border-bottom: 1px solid var(--color-line);
	}
	.row:last-child {
		border-bottom: none;
	}
	dt {
		font-weight: 600;
		color: var(--color-ink);
	}
	dd {
		text-align: right;
		color: var(--color-ink);
		font-variant-numeric: tabular-nums;
	}
	.hinweis {
		display: block;
		font-size: 0.85rem;
		color: var(--color-petrol);
	}
	.compact .row {
		padding: 0.45rem 0;
		font-size: 0.95rem;
	}
</style>
