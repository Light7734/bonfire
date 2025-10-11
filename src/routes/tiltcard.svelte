<script lang="ts">
	export let imageSrc: string;
	export let imageAlt: string = 'Card image';
	export let width: string = '300px';
	export let height: string = '400px';

	let cardElement: HTMLDivElement;
	let rotateX = 0;
	let rotateY = 0;
	let isHovered = false;

	// Derived shadow offsets
	let shadowX = 0;
	let shadowY = 0;
	let shadowBlur = 20;

	function handleMouseMove(event: MouseEvent) {
		if (!cardElement) return;

		const rect = cardElement.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		// Calculate rotation based on cursor position (max tilt of 10 degrees)
		rotateY = ((x - centerX) / centerX) * 10 * 2;
		rotateX = ((centerY - y) / centerY) * 10 * 2;

		// Make shadow move opposite to tilt for a realistic lighting effect
		shadowX = -rotateY * 0.7; // exaggerate slightly
		shadowY = rotateX * 0.7;
	}

	function handleMouseEnter() {
		isHovered = true;
	}

	function handleMouseLeave() {
		isHovered = false;
		rotateX = 0;
		rotateY = 0;
		shadowX = 0;
		shadowY = 0;
	}
</script>

<div
	bind:this={cardElement}
	class="cursor-pointer"
	class:scale-[1.03]={isHovered}
	style="
		width: {width};
		height: {height};
		perspective: 1000px;
		filter: drop-shadow({shadowX}px {shadowY}px 0px rgba(0, 0, 0, 0.5));
	"
	on:mousemove={handleMouseMove}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	role="img"
	aria-label={imageAlt}
>
	<img
		src={imageSrc}
		alt={imageAlt}
		class="h-full w-full rounded-xl object-cover transition-transform duration-100 ease-out"
		style="
			transform: rotateX({rotateX}deg) rotateY({rotateY}deg);
			transform-style: preserve-3d;
		"
	/>
</div>
