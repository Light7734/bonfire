<script lang="ts">
	const bio = `
    `;
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="bg-card border-border relative mx-auto w-full max-w-2xl rounded-lg border border-dark-muted transition-all duration-100 ease-out hover:scale-[1.01] hover:shadow-[5px_5px_5px_#000000]"
>
	<div class="mx-auto flex max-w-2xl origin-center">
		<img
			src={'/pfp.jpg'}
			alt="author"
			class="h-full w-full rounded-t-lg object-cover transition-transform duration-100 ease-out"
		/>
	</div>

	<div class="m-4 min-w-[60%]">
		<h1 class="font-mono text-2xl">Hello, I'm Sara Roxanna</h1>
		<p class="text-muted-foreground pt-4 leading-relaxed">
			A <strong class="text-dark-red">C++ specialist</strong> and bibliophile with ardent interest
			for
			<strong class="font-bold">large-scale</strong>
			projects. <br />
			Accumulating 5+ years of experience through countless failures, many sleepless nights and enough
			caffeine, I've turned myself into a pickle. Are you still reading this? Wow, check out my...
		</p>
	</div>
</div>
