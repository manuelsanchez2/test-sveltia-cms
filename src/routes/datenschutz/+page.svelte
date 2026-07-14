<script lang="ts">
	import { datenschutz } from '$lib/content';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title={datenschutz.titel}
	path="/datenschutz"
	description="Datenschutzerklärung der Praxis gemäß DSGVO."
/>

<section class="section">
	<div class="container">
		<SectionTitle titel={datenschutz.titel} as="h1" />
		<div class="prose-legal">
			{@html datenschutz.html}
		</div>
	</div>
</section>

<style>
	.prose-legal {
		margin-top: 2.5rem;
	}
</style>
