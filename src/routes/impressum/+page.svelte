<script lang="ts">
	import { impressum } from '$lib/content';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo title={impressum.titel} path="/impressum" description="Impressum der Praxis gemäß § 5 TMG." />

<section class="section">
	<div class="container">
		<SectionTitle titel={impressum.titel} as="h1" />
		<div class="prose-legal">
			{@html impressum.html}
		</div>
	</div>
</section>

<style>
	.prose-legal {
		margin-top: 2.5rem;
	}
</style>
