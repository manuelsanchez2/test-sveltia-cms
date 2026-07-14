<script lang="ts">
	import type { Social, SocialPlattform } from '$lib/content';

	let { social }: { social: Social } = $props();

	const labels: Record<SocialPlattform, string> = {
		instagram: 'Instagram der Praxis öffnen',
		facebook: 'Facebook-Seite der Praxis öffnen',
		linkedin: 'LinkedIn-Profil der Praxis öffnen',
		youtube: 'YouTube-Kanal der Praxis öffnen',
		whatsapp: 'Praxis über WhatsApp kontaktieren',
		jameda: 'Praxis-Profil auf jameda öffnen',
		doctolib: 'Termin über Doctolib vereinbaren'
	};

	const visible = $derived(social.links.filter((l) => l.url && l.url.trim() !== ''));
</script>

{#if visible.length}
	<ul class="social">
		{#each visible as link}
			<li>
				<a
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={labels[link.plattform] ?? link.plattform}
				>
					{#if link.plattform === 'instagram'}
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<rect x="3" y="3" width="18" height="18" rx="5" />
							<circle cx="12" cy="12" r="4" />
							<circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
						</svg>
					{:else if link.plattform === 'facebook'}
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<path d="M14 8.5V6.8c0-.9.4-1.3 1.4-1.3H17V3h-2.4C12.1 3 11 4.4 11 6.6v1.9H9V11h2v10h3V11h2.2l.4-2.5H14z" />
						</svg>
					{:else if link.plattform === 'linkedin'}
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<rect x="3" y="3" width="18" height="18" rx="3" />
							<path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
						</svg>
					{:else if link.plattform === 'youtube'}
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<rect x="3" y="6" width="18" height="12" rx="3" />
							<path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
						</svg>
					{:else if link.plattform === 'whatsapp'}
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20z" />
							<path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.6.8-1.1l-1.3-.9-1 .7c-1-.5-1.8-1.3-2.3-2.3l.7-1-.9-1.3c-.5-.2-1.2.2-1.2.8z" fill="currentColor" stroke="none" />
						</svg>
					{:else if link.plattform === 'jameda'}
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<circle cx="12" cy="12" r="9" />
							<path d="M8 12l2.5 2.5L16 9" />
						</svg>
					{:else if link.plattform === 'doctolib'}
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<rect x="4" y="5" width="16" height="15" rx="2" />
							<path d="M4 9h16M9 3v3M15 3v3M12 12v4M10 14h4" />
						</svg>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	.social {
		display: flex;
		gap: 1rem;
		align-items: center;
		list-style: none;
		padding: 0;
		margin: 0;
	}
	a {
		display: inline-flex;
		color: var(--color-ink);
		transition: color 0.2s ease;
	}
	a:hover {
		color: var(--color-petrol);
	}
	svg {
		width: 20px;
		height: 20px;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.5;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
</style>
