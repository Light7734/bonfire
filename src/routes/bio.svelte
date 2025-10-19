<script lang="ts">
	import TiltCard from './tiltcard.svelte';

	const lorem_ipsum =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

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
	class="bg-card border-border relative mx-auto w-full max-w-2xl rounded-lg border border-dark-red transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-[5px_5px_5px_#000000]"
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
		<h1 class="font-mono text-4xl">Light Roxanna</h1>
		<h3 class="mt-4 text-xl text-light-accent">Software Engineer</h3>

		<p class="text-muted-foreground leading-relaxed">
			{lorem_ipsum}
		</p>
	</div>
</div>
