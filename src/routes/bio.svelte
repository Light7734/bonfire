<script lang="ts">
	import TiltCard from './tiltcard.svelte';

	export let avatar: string;
	export let description: string;
</script>

<div
	class="relative mx-auto flex w-full max-w-2xl rounded-l border-b border-l border-t shadow-lg duration-300 ease-out hover:scale-[1.01] hover:shadow-[5px_5px_5px_#000000]"
>
	<div class="m-4">
		<h1 class="font-mono text-4xl">LIGHT 7734</h1>
		<p class="text-muted-foreground leading-relaxed">
			{description}
		</p>
	</div>

	<div class="mx-auto flex max-w-2xl origin-center">
		<img
			src={avatar}
			alt="author"
			class="h-full w-full object-cover transition-transform duration-100 ease-out"
		/>
	</div>
</div>
