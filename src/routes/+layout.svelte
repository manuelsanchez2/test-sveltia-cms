<script lang="ts">
	import '../app.css';
	import '@fontsource/marcellus/400.css';
	import '@fontsource/mulish/400.css';
	import '@fontsource/mulish/600.css';
	import '@fontsource/mulish/700.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data, children } = $props();
</script>

<a class="skip-link" href="#inhalt">Zum Inhalt springen</a>

<Header general={data.general} />

<main id="inhalt">
	{@render children()}
</main>

<Footer general={data.general} social={data.social} />

<style>
	main {
		width: 100%;
	}
	.skip-link {
		position: absolute;
		left: 1rem;
		top: -3rem;
		background: var(--color-petrol);
		color: var(--color-paper);
		padding: 0.6rem 1rem;
		z-index: 100;
		transition: top 0.2s ease;
	}
	.skip-link:focus {
		top: 1rem;
	}
</style>
