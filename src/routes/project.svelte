<script lang="ts">
	import { ChevronDown, ChevronUp, ExternalLink, BookText } from 'lucide-svelte';

	import LanguageStats from './languages.svelte';
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
	export let headline: string;
	export let description: string;
	export let icon: string;
	export let repository: ProjectLink = { label: 'Forgejo', url: '', iconComponent: GitBranch };
	export let mirrors: ProjectLink[] = [
		{ label: 'Github', url: '', iconComponent: Github },
		{ label: 'Gitlab', url: '', iconComponent: Gitlab },
		{ label: 'Codeberg', url: '', iconComponent: Code }
	];
	export let documentation: string = '';
	export let gallery: string[] = [];
	export let features: string[] = [];

	let expansionStage = 0; // 0: collapsed, 1: description, 2: gallery, 3: source code
	const MAX_STAGE = 1;

	function toggleExpansion() {
		expansionStage = expansionStage >= MAX_STAGE ? 0 : expansionStage + 1;
	}

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
		{#if icon !== ''}
			<div class="mb-4 flex items-center gap-4">
				<div class="flex-shrink-0">
					<TiltCard imageSrc={icon} imageAlt="{title} icon" width="256px" height="256px" />
				</div>
				<div class="m-4 min-w-0 flex-1">
					<div>
						<h1 class="font-mono text-4xl uppercase">{title}</h1>

						<div class="border-border w-full self-center border-t p-1"></div>
						<p class="text-muted-foreground leading-relaxed">
							{headline}
						</p>
					</div>
				</div>
			</div>
		{:else}
			<div class="m-4 min-w-0 flex-1">
				<div>
					<h1 class="font-mono text-3xl">{title}</h1>

					<div class="border-border w-full self-center border-t p-1"></div>
					<p class="text-muted-foreground leading-relaxed">
						{headline}
					</p>
				</div>
			</div>
		{/if}

		{#if expansionStage >= 1}
			<div transition:slide={{ duration: 500 }} class="ease-out">
				<p class="text-muted-foreground pb-8 leading-relaxed">
					{description}
				</p>

				<!-- LANGUAGES -->

				<h3 class="text-muted-foreground mb-3 text-sm font-semibold uppercase tracking-wide">
					Supported Graphics-APIs
				</h3>

				<div class="flex flex-wrap gap-3">
					<p>Vulkan</p>

					<p>DirectX</p>

					<p>Metal</p>
				</div>

				<h3 class="text-muted-foreground mb-3 text-sm font-semibold uppercase tracking-wide">
					Features
				</h3>

				<!-- FEATURES -->
				<ul class="text-muted-foreground mb-2 list-disc pl-5">
					{#each features as feature}
						<li>{feature}</li>
					{/each}
				</ul>
				<h4 class="mb-1 font-medium">{title}'s Tech Stack':</h4>

				<!-- GALLERY -->

				<h3 class="text-muted-foreground mb-3 text-sm font-semibold uppercase tracking-wide">
					Gallery
				</h3>
				<div class="mb-4 grid grid-cols-3 gap-2">
					{#each gallery as img}
						<img src={img} alt="{title} screenshot" class="rounded object-cover" />
					{/each}
				</div>

				<div class="mx-auto w-full py-4">
					<LanguageStats repositoryUrl="https://github.com/light7734/light" />
				</div>

				<div class="flex items-start justify-start gap-0">
					<div class="flex-none">
						<h3 class="text-muted-foreground mb-2 text-sm font-semibold uppercase tracking-wide">
							Source
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

							<a
								href={documentation}
								target="_blank"
								rel="noopener noreferrer"
								class="text-accent-foreground flex items-center gap-1 transition-colors duration-200 hover:underline"
							>
								<BookText class="h-4 w-4" />
								Documentation
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
					DETAILS
				{/if}
			</span>
			<ChevronDown
				class="h-30 w-30 transition-transform duration-200 group-hover:translate-y-[2px]"
			/>
		{/if}
	</button>
</div>
