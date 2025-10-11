<script lang="ts">
	import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-svelte';
	import TiltCard from './tiltcard.svelte';

	import { Github, Gitlab, Code, GitBranch } from 'lucide-svelte';

	interface ProjectLink {
		label: string;
		url: string;
		iconComponent: any;
	}

	interface Language {
		name: string;
		icon?: string;
	}

	export let title: string;
	export let description_preview: string;
	export let description: string;
	export let icon: string;
	export let repository: ProjectLink = { label: 'Forgejo', url: '', iconComponent: GitBranch };
	export let mirrors: ProjectLink[] = [
		{ label: 'Github', url: '', iconComponent: Github },
		{ label: 'Gitlab', url: '', iconComponent: Gitlab },
		{ label: 'Codeberg', url: '', iconComponent: Code }
	];
	export let gallery: string[] = [];
	export let features: string[] = [];
	export let languages: Language[] = [];
	export let graphicsApis: string[] = [];
	export let cicd: string[] = [];

	let expansionStage = 0; // 0: collapsed, 1: description, 2: gallery, 3: source code
	const MAX_STAGE = 3;

	function toggleExpansion() {
		expansionStage = expansionStage >= MAX_STAGE ? 0 : expansionStage + 1;
	}

	import { slide } from 'svelte/transition';
</script>

<div
	class="bg-card border-border relative mx-auto w-full max-w-2xl rounded-lg border transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-[5px_5px_5px_#000000]"
>
	<div class="p-6">
		<div class="mb-4 flex items-center gap-4">
			<div class="flex-shrink-0">
				<TiltCard imageSrc={icon} imageAlt="{title} icon" width="256px" height="256px" />
			</div>
			<div class="min-w-0 flex-1">
				<TiltCard imageSrc="/light_text.svg" imageAlt="{title} icon" width="auto" height="auto" />
			</div>
		</div>

		<p class="text-muted-foreground leading-relaxed">
			{expansionStage >= 1 ? description : description_preview}
		</p>

		{#if expansionStage >= 1}
			<div class="py-4" transition:slide={{ duration: 300 }}>
				{#if features.length > 0 || languages.length > 0 || graphicsApis.length > 0 || cicd.length > 0}
					{#if features.length > 0}
						<h3 class="text-muted-foreground mb-3 text-sm font-semibold uppercase tracking-wide">
							Features
						</h3>
						<ul class="text-muted-foreground mb-2 list-disc pl-5">
							{#each features as feature}
								<li>{feature}</li>
							{/each}
						</ul>
					{/if}
					<h4 class="mb-1 font-medium">Technology behind {title}:</h4>
					{#if languages.length > 0}
						<h5 class="mb-1 text-sm">Languages:</h5>
						<div class="mb-2 flex flex-wrap gap-2">
							{#each languages as lang}
								<span class="flex items-center gap-1">
									{#if lang.icon}
										<img src={lang.icon} alt="{lang.name} icon" class="ivert h-4 w-4" />
									{/if}
									{lang.name}
								</span>
							{/each}
						</div>
					{/if}
					{#if graphicsApis.length > 0}
						<h5 class="mb-1 text-sm">Graphics APIs:</h5>
						<div class="mb-2 flex flex-wrap gap-2">
							{#each graphicsApis as api}
								<span>{api}</span>
							{/each}
						</div>
					{/if}
					{#if cicd.length > 0}
						<h5 class="mb-1 text-sm">CICD:</h5>
						<div class="mb-2 flex flex-wrap gap-2">
							{#each cicd as tool}
								<span>{tool}</span>
							{/each}
						</div>
					{/if}
				{/if}
			</div>
		{/if}

		{#if expansionStage >= 2 && gallery.length > 0}
			<div transition:slide={{ duration: 300 }}>
				<h3 class="text-muted-foreground mb-3 text-sm font-semibold uppercase tracking-wide">
					Gallery
				</h3>
				<div class="mb-4 grid grid-cols-3 gap-2">
					{#each gallery as img}
						<img src={img} alt="{title} screenshot" class="rounded object-cover" />
					{/each}
				</div>
			</div>
		{/if}

		{#if expansionStage >= 3}
			<div transition:slide={{ duration: 300 }}>
				<div class="border-border border-t pt-4">
					<div class="flex items-start justify-start gap-0">
						<div class="flex-none">
							<h3 class="text-muted-foreground mb-2 text-sm font-semibold uppercase tracking-wide">
								Repository
							</h3>
							<div class="flex flex-wrap gap-3">
								<a
									href={repository.url}
									target="_blank"
									rel="noopener noreferrer"
									class="text-accent-foreground flex items-center gap-1 transition-colors duration-200 hover:underline"
								>
									<svelte:component this={repository.iconComponent} class="h-4 w-4" />
									{repository.label}
								</a>
							</div>
						</div>
						<div class="border-border mx-4 h-8 self-center border-l"></div>
						<div class="flex-none">
							<h3 class="text-muted-foreground mb-2 text-sm font-semibold uppercase tracking-wide">
								Mirrors
							</h3>
							<div class="flex flex-wrap gap-3">
								{#each mirrors as link}
									<a
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										class="text-accent-foreground flex items-center gap-1 transition-colors duration-200 hover:underline"
									>
										<svelte:component this={link.iconComponent} class="h-4 w-4" />
										{link.label}
									</a>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<button
		on:click={toggleExpansion}
		class="bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border-border group flex w-full items-center justify-center gap-2 rounded-b-lg border-t px-6 py-3 transition-colors duration-200"
	>
		{#if expansionStage >= MAX_STAGE}
			<ChevronUp
				class="h-4 w-16 transition-transform duration-200 group-hover:translate-y-[-2px]"
			/>
		{:else}
			<ChevronDown
				class="h-30 w-30 transition-transform duration-200 group-hover:translate-y-[2px]"
			/>
			<span class="font-bold">
				{#if expansionStage === 0}
					FEATURES
				{:else if expansionStage === 1}
					GALLERY
				{:else if expansionStage === 2}
					SOURCE
				{/if}
			</span>
			<ChevronDown
				class="h-30 w-30 transition-transform duration-200 group-hover:translate-y-[2px]"
			/>
		{/if}
	</button>
</div>
