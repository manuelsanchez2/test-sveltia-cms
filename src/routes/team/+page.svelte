<script lang="ts">
	import { team } from '$lib/content';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import TeamCard from '$lib/components/TeamCard.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { reveal } from '$lib/reveal';
</script>

<Seo title="Team" path="/team" description={team.einleitung} />

<section class="section">
	<div class="container">
		<SectionTitle eyebrow={team.eyebrow} titel={team.titel} as="h1" />
		<p class="intro" use:reveal>{team.einleitung}</p>

		<div class="grid">
			{#each team.mitglieder as m}
				<TeamCard
					name={m.name}
					rolle={m.rolle}
					qualifikationen={m.qualifikationen}
					foto={m.foto}
				/>
			{/each}
		</div>
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
		gap: 1.5rem;
		grid-template-columns: 1fr;
		margin-top: 3rem;
	}
	@media (min-width: 640px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 980px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
