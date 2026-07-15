<script lang="ts">
	import type { General } from '$lib/content';
	import { page } from '$app/state';

	let { general }: { general: General } = $props();

	const nav = [
		{ href: '/leistungen', label: 'Leistungen' },
		{ href: '/praxis', label: 'Die Praxis' },
		{ href: '/team', label: 'Team' },
		{ href: '/rezept', label: 'Rezept' },
		{ href: '/kontakt', label: 'Kontakt' }
	];

	let open = $state(false);

	function isActive(href: string) {
		return page.url.pathname === href;
	}
</script>

<header>
	<div class="bar">
		<a class="brand" href="/" onclick={() => (open = false)}>
			{general.praxisName}
		</a>

		<button
			class="toggle"
			aria-expanded={open}
			aria-controls="hauptmenue"
			onclick={() => (open = !open)}
		>
			<span class="sr-only">Menü {open ? 'schließen' : 'öffnen'}</span>
			<svg viewBox="0 0 24 24" aria-hidden="true">
				{#if open}
					<path d="M6 6l12 12M18 6L6 18" />
				{:else}
					<path d="M4 7h16M4 12h16M4 17h16" />
				{/if}
			</svg>
		</button>

		<nav id="hauptmenue" class:open aria-label="Hauptnavigation">
			{#each nav as item}
				<a
					href={item.href}
					aria-current={isActive(item.href) ? 'page' : undefined}
					onclick={() => (open = false)}
				>
					{item.label}
				</a>
			{/each}
			{#if general.terminLink}
				<a class="cta" href={general.terminLink} target="_blank" rel="noopener">
					Termin vereinbaren
				</a>
			{/if}
		</nav>
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 50;
		background-color: color-mix(in srgb, var(--color-paper) 92%, transparent);
		backdrop-filter: blur(8px);
		border-bottom: 1px solid var(--color-line);
	}
	.bar {
		max-width: 1100px;
		margin-inline: auto;
		padding: 1rem 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	.brand {
		font-family: var(--font-display);
		font-size: 1.15rem;
		color: var(--color-ink);
		line-height: 1.2;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 1.75rem;
	}
	nav a {
		font-size: 0.98rem;
		color: var(--color-ink);
		position: relative;
		transition: color 0.2s ease;
	}
	nav a:hover,
	nav a[aria-current='page'] {
		color: var(--color-petrol);
	}
	nav a[aria-current='page']::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -6px;
		height: 2px;
		background-color: var(--color-petrol);
	}
	.cta {
		background-color: var(--color-petrol);
		color: var(--color-paper) !important;
		padding: 0.5rem 1.1rem;
		font-weight: 600;
	}
	.cta:hover {
		background-color: var(--color-petrol-deep);
	}
	.cta::after {
		display: none;
	}

	.toggle {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-ink);
		padding: 0.25rem;
	}
	.toggle svg {
		width: 26px;
		height: 26px;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.5;
		stroke-linecap: round;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	@media (max-width: 820px) {
		.toggle {
			display: inline-flex;
		}
		nav {
			display: none;
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			align-items: flex-start;
			gap: 1.25rem;
			padding: 1.5rem;
			background-color: var(--color-paper);
			border-bottom: 1px solid var(--color-line);
		}
		nav.open {
			display: flex;
		}
		.cta {
			width: 100%;
			justify-content: center;
			display: inline-flex;
			text-align: center;
		}
	}
</style>
