<script context="module">
</script>

<script lang="ts">
	import { ChevronDown, ChevronUp, BookText, Github, Gitlab, Code, GitBranch } from 'lucide-svelte';
	interface ProjectData {
		title: string | undefined;
		icon: string;
		headline: string;
		forge: string | undefined;
		codeberg: string | undefined;
		github: string | undefined;
		gitlab: string | undefined;
		docs: string | undefined;
		gallery: string[] | undefined;
	}

	import LanguageStats from './languages.svelte';
	import TiltCard from './tiltcard.svelte';

	export let data: ProjectData = {
		title: '',
		icon: '',
		headline: '',
		forge: '',
		codeberg: '',
		github: '',
		gitlab: '',
		docs: '',
		gallery: undefined
	};

	export let description: string;

	let expanded = false; // 0: collapsed, 1: description, 2: gallery, 3: source code

	import { slide } from 'svelte/transition';

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
	class="bg-card border-border relative mx-auto w-full max-w-2xl rounded-lg border transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-[5px_5px_5px_#000000]"
	style="transform: perspective(1000px) rotateX({tiltX}deg) rotateY({tiltY}deg);"
	on:mousemove={handleMouseMove}
	on:mouseleave={handleMouseLeave}
>
	<div class="p-6">
		<div class="mb-4 flex items-center gap-4">
			<div class="flex-shrink-0">
				<TiltCard imageSrc={data.icon} imageAlt="{data.title} icon" width="256px" height="256px" />
			</div>
			<div class="m-4 min-w-0 flex-1">
				<div>
					<h1 class="font-mono text-4xl uppercase">{data.title}</h1>

					<div class="border-border w-full self-center border-t p-1"></div>
					<p class="text-muted-foreground leading-relaxed">
						{data.headline}
					</p>
				</div>
			</div>
		</div>
		{#if expanded}
			<div transition:slide={{ duration: 150 }} class="ease-in">
				<p class="text-muted-foreground pb-8 leading-relaxed">
					{description}
				</p>

				{#if data.gallery}
					<h3 class="text-muted-foreground mb-3 text-sm font-semibold uppercase tracking-wide">
						Gallery
					</h3>

					<div class="mb-4 grid grid-cols-3 gap-2">
						{#each data.gallery as img}
							<img src={img} alt="{data.title} screenshot" class="rounded object-cover" />
						{/each}
					</div>
				{/if}

				<div class="mx-auto w-full py-4">
					<LanguageStats repositoryUrl={data.github ? data.github : ''} />
				</div>

				<div class="flex items-start justify-start gap-0">
					<div class="flex-none">
						<h3 class="text-muted-foreground mb-2 text-sm font-semibold uppercase tracking-wide">
							Source
						</h3>
						<div class="flex flex-wrap gap-3">
							<a
								href={data.forge}
								target="_blank"
								rel="noopener noreferrer"
								class="text-accent-foreground flex items-center gap-1 transition-colors duration-200 hover:underline"
							>
								<GitBranch />
								Forge
							</a>

							{#if data.docs}
								<a
									href={data.docs}
									target="_blank"
									rel="noopener noreferrer"
									class="text-accent-foreground flex items-center gap-1 transition-colors duration-200 hover:underline"
								>
									<BookText class="h-4 w-4" />
									Documentation
								</a>
							{/if}
						</div>
					</div>
					<div class="border-border mx-4 h-8 self-center border-l"></div>
					<div class="flex-none">
						<h3 class="text-muted-foreground mb-2 text-sm font-semibold uppercase tracking-wide">
							Mirrors
						</h3>
						<div class="flex flex-wrap gap-3">
							<a
								href={data.github}
								target="_blank"
								rel="noopener noreferrer"
								class="text-accent-foreground flex items-center gap-1 transition-colors duration-200 hover:underline"
							>
								<Github class="h-4 w-4" />
								Github
							</a>

							<a
								href={data.gitlab}
								target="_blank"
								rel="noopener noreferrer"
								class="text-accent-foreground flex items-center gap-1 transition-colors duration-200 hover:underline"
							>
								<Gitlab class="h-4 w-4" />
								Gitlab
							</a>

							<a
								href={data.gitlab}
								target="_blank"
								rel="noopener noreferrer"
								class="text-accent-foreground flex items-center gap-1 transition-colors duration-200 hover:underline"
							>
								<Code class="h-4 w-4" />
								Codeberg
							</a>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<button
		on:click={function () {
			expanded = !expanded;
		}}
		class="bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border-border group flex w-full items-center justify-center gap-2 rounded-b-lg border-t px-6 py-3 transition-colors duration-200"
	>
		{#if expanded}
			<ChevronUp
				class="h-4 w-16 transition-transform duration-200 group-hover:translate-y-[-2px]"
			/>
		{:else}
			<ChevronDown
				class="h-30 w-30 transition-transform duration-200 group-hover:translate-y-[2px]"
			/>
			<span class="font-bold">
				{#if !expanded}
					DETAILS
				{/if}
			</span>
			<ChevronDown
				class="h-30 w-30 transition-transform duration-200 group-hover:translate-y-[2px]"
			/>
		{/if}
	</button>
</div>
