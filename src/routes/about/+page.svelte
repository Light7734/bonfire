<script lang="ts">
	function json_to_project(json: any) {
		return {
			title: json.title,
			icon: json.icon,
			headline: json.headline,
			description: json.description,
			forge: json.forge,
			codeberg: json.codeberg,
			github: json.github,
			gitlab: json.gitlab,
			docs: json.docs,
			gallery: json.gallery
		};
	}

	import Project from './project.svelte';
	import Bio from './bio.svelte';

	import * as light from '$lib/data/projects/light.json';
	import * as dazzle from '$lib/data/projects/dazzle.json';
	import * as bonfire from '$lib/data/projects/bonfire.json';
	import * as hikari from '$lib/data/projects/hikari.json';

	const light_data = json_to_project(light);
	const dazzle_data = json_to_project(dazzle);
	const bonfire_data = json_to_project(bonfire);
	const hikari_data = json_to_project(hikari);
</script>

<div class="min-h-screen bg-dark-bg text-dark-fg transition-colors duration-300">
	<main class="bg-card p-8 transition-all duration-300 ease-out">
		<Bio />

		<br />

		<div class="relative left-1/2 flex w-screen max-w-none -translate-x-1/2 items-center">
			<div class="border-border flex-grow border-t border-t-dark-neutral"></div>
			<h1
				class="rounded-lg px-4 align-middle font-mono text-4xl transition-all duration-300 ease-out"
			>
				PROJECTS
			</h1>
			<div class="border-border flex-grow border-t border-t-dark-neutral"></div>
		</div>

		<br />

		<Project data={light_data} />
		<br />

		<Project data={dazzle_data} />
		<br />

		<Project data={hikari_data} />
		<br />

		<Project data={bonfire_data} />
		<br />

		<div class="relative left-1/2 flex w-screen max-w-none -translate-x-1/2 items-center">
			<div class="border-border flex-grow border-t border-t-dark-neutral"></div>
			<h1
				class="rounded-lg px-4 align-middle font-mono text-4xl transition-all duration-300 ease-out"
			>
				EXPERIENCE
			</h1>
			<div class="border-border flex-grow border-t border-t-dark-neutral"></div>
		</div>
		<br />

		<div class="relative left-1/2 flex w-screen max-w-none -translate-x-1/2 items-center">
			<div class="border-border flex-grow border-t border-t-dark-neutral"></div>
			<h1
				class="rounded-lg px-4 align-middle font-mono text-4xl transition-all duration-300 ease-out"
			>
				CONTACT
			</h1>
			<div class="border-border flex-grow border-t border-t-dark-neutral"></div>
		</div>
		<br />
	</main>
</div>
