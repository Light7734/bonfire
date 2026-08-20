<script lang="ts">
	import './article.css';
	import Heading from '$lib/components/heading.svelte';

	export let title;
	export let date;
</script>

	<div class="body">
		<Heading {title} {date} />
		<slot></slot>
	</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

	.container {
		background-color: #1d2021;
	}

	.body {
        margin: 0;
		background-color: #282828;

		min-width: 80ch;
		max-width: 80ch;
		text-wrap-mode: wrap;
		text-wrap-style: pretty;
		text-align: justify;

	}

	.padding {
		flex: 1;
	}
</style>
