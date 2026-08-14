<script context="module">
</script>

<script lang="ts">
	import { ChevronDown, ChevronUp, BookText, Code, GitBranch } from '@lucide/svelte';
	interface ProjectData {
		title: string | undefined;
		icon: string;
		headline: string;
		description: string;
		forge: string | undefined;
		codeberg: string | undefined;
		github: string | undefined;
		gitlab: string | undefined;
		docs: string | undefined;
		gallery: string[] | undefined;
	}

	// import LanguageStats from './languages.svelte';
	import TiltCard from '$lib/components/tilt_card.svelte';

	export let data: ProjectData = {
		title: '',
		icon: '',
		headline: '',
		description: '',
		forge: '',
		codeberg: '',
		github: '',
		gitlab: '',
		docs: '',
		gallery: undefined
	};

	let expanded = false;

	import { slide } from 'svelte/transition';
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="bg-card border-border relative mx-auto w-full max-w-2xl rounded-lg border transition-all duration-100 ease-out hover:scale-[1.01] hover:shadow-[5px_5px_5px_#000000]"
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
					{data.description}
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

				<div class="flex items-start justify-start gap-0">
					<div class="flex-none">
						<h3 class="text-muted-foreground mb-2 text-sm font-semibold uppercase tracking-wide">
							Source
						</h3>
						<div class="flex flex-wrap gap-3">
							{#if data.docs}
								<a
									href={data.docs}
									target="_blank"
									rel="noopener noreferrer"
									class="text-accent-foreground flex items-center gap-1 transition-colors duration-200 hover:underline"
								>
									<BookText class="h-4 w-4" />
									Docs
								</a>
							{/if}

							<a
								href={data.forge}
								target="_blank"
								rel="noopener noreferrer"
								class="text-accent-foreground flex items-center gap-1 transition-colors duration-200 hover:underline"
							>
								<GitBranch />
								Forge
							</a>
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
								<Code class="h-4 w-4" />
								Github
							</a>

							<a
								href={data.gitlab}
								target="_blank"
								rel="noopener noreferrer"
								class="text-accent-foreground flex items-center gap-1 transition-colors duration-200 hover:underline"
							>
								<Code class="h-4 w-4" />
								Gitlab
							</a>

							<a
								href={data.codeberg}
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
