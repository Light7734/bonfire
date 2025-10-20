<script lang="ts">
	const bio = `
    `;

	let tiltX = 0;
	let tiltY = 0;

	function handleMouseMove(event: MouseEvent) {
		const card = event.currentTarget as HTMLElement;
		const rect = card.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		const percentX = (x - centerX) / centerX;
		const percentY = (centerY - y) / centerY; // Invert Y for natural tilt
		const maxTilt = 2;
		tiltX = percentY * maxTilt;
		tiltY = percentX * maxTilt;
	}

	function handleMouseLeave() {
		tiltX = 0;
		tiltY = 0;
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="bg-card border-border relative mx-auto w-full max-w-2xl rounded-lg border border-dark-muted transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-[5px_5px_5px_#000000]"
	style="transform: perspective(1000px) rotateX({tiltX}deg) rotateY({tiltY}deg);"
	on:mousemove={handleMouseMove}
	on:mouseleave={handleMouseLeave}
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
